import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const auth = (request: Request, response: Response, next: NextFunction) => {
    const { authorization } = request.headers;

    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
        const token = authorization.split(" ")[1];

        if (process.env.SECRET) {
            try {
                jwt.verify(token, process.env.SECRET);
            } catch (error) {
                if (error instanceof jwt.JsonWebTokenError) {
                    return response
                        .status(401)
                        .json({ error: "Token is invalid." });
                } else {
                    return response.status(500).json({ error });
                }
            }
        } else {
            throw Error("No environment SECRET defined.");
        }
    } else {
        return response
            .status(401)
            .json({ error: "Token missing or invalid." });
    }

    next();
};

export default auth;
