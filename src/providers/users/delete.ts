import { Request, Response } from "express";
import { User } from "../../models";

const deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        const destroyedRows = await User.destroy({ where: { id: Number(id) } });

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
