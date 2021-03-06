import { Request, Response } from "express";
import sequelize from "../../db/connect";

const deleteUser = async (request: Request, response: Response) => {
    const { models } = sequelize;
    const { id } = request.params;

    try {
        const destroyedRows = await models.user.destroy({
            where: { id: Number(id) },
        });

        if (destroyedRows > 0) {
            response.status(204).end();
        } else {
            response.status(404).end();
        }
    } catch (error) {
        response.status(500).json({ error });
    }
};

export { deleteUser };
