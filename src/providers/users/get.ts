import { Response, Request } from "express";
import sequelize from "../../db/connect";

const getAllUsers = async (request: Request, response: Response) => {
    const { models } = sequelize;
    const users = await models.user.findAll({
        attributes: { exclude: ["password"] },
        include: models.note,
    });

    response.status(200).json(users);
};

const getOneUser = async (request: Request, response: Response) => {
    const { models } = sequelize;
    const { id } = request.params;
    const user = await models.user.findByPk(Number(id), {
        attributes: { exclude: ["password"] },
        include: models.note,
    });

    if (user) {
        response.status(200).json(user);
    } else {
        response.status(404).end();
    }
};

export { getAllUsers, getOneUser };
