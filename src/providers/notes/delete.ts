import { Request, Response } from "express";
import { Note } from "../../models";

const deleteNote = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        const destroyedRows = await Note.destroy({ where: { id: Number(id) } });

        if (destroyedRows > 0) {
            response.status(204).end();
        } else {
            response.status(404).end();
        }
    } catch (error) {
        response.status(500).json({ error });
    }
};

export { deleteNote };
