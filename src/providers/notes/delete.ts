import { Request, Response } from "express";
import { Note } from "../../models";

const deleteNote = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        await Note.destroy({ where: { id: Number(id) } });

        response.status(200).json({ message: "Delete successful" });
    } catch (error) {
        response.status(400).json({ error });
    }
};

export { deleteNote };
