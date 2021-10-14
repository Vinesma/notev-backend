import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response } from "express";
import { User, UserType } from "../../models";
import { Request } from "../../types";

type Body = Pick<UserType, "password" | "email">;

const createLogin = async (request: Request<Body>, response: Response) => {
    const { password, email } = request.body;

    try {
        const user = await User.findOne({ where: { email } });
        const passwordMatches =
            user === null
                ? false
                : await bcrypt.compare(password, user.get("password"));

        if (passwordMatches && user) {
            const tokenPayload = {
                id: user.get("id"),
                name: user.get("name"),
            };

            if (process.env.SECRET) {
                const token = jwt.sign(tokenPayload, process.env.SECRET);

                return response.status(200).send({ token });
            }

            throw Error("No environment SECRET defined.");
        } else {
            return response
                .status(401)
                .json({ error: "Invalid email or password." });
        }
    } catch (error) {
        response.status(500).json({ error });
    }
};

export { createLogin };
