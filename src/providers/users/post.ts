import { Response } from "express";
import { Request } from "../../types";
import { User, UserCreateType, UserType } from "../../models";
import { ValidationError } from "sequelize";

const addUser = async (
    request: Request<UserCreateType>,
    response: Response
) => {
    const user = request.body;

    try {
        const newUser = await User.create(user);
        const newUserNoPassword: Omit<UserType, "password"> = JSON.parse(
            JSON.stringify(newUser),
            (key, value) => {
                if (key !== "password") {
                    return value;
                }
            }
        );

        response.status(201).json(newUserNoPassword);
    } catch (error) {
        if (error instanceof ValidationError) {
            response.status(409).json({
                errors: error.errors
                    .reduce((acc, error) => `${acc}${error.message}. `, "")
                    .trimEnd(),
            });
        } else {
            response.status(500).json({ error });
        }
    }
};

export { addUser };
