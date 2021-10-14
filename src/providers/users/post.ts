import { Response } from "express";
import { Request } from "../../types";
import { UserCreateType, UserType } from "../../models";
import { ValidationError } from "sequelize";
import sequelize from "../../db/connect";

const addUser = async (
    request: Request<UserCreateType>,
    response: Response
) => {
    const { models } = sequelize;
    const user = request.body;

    if (user.id)
        return response
            .status(400)
            .json({
                error: `Bad request: remove id from body request, id is auto assigned by database.`,
            });

    try {
        const newUser = await models.user.create(user);
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
