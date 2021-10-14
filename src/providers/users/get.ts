import { Response, Request } from "express";
import { User } from "../../models";

const getAllUsers = async (request: Request, response: Response) => {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });

    response.status(200).json(users);
};

const getOneUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    const user = await User.findByPk(Number(id), {
        attributes: { exclude: ["password"] },
    });

    if (user) {
        response.status(200).json(user);
    } else {
        response.status(404).end();
    }
};

export { getAllUsers, getOneUser };
