import { Request, Response } from "express";
import { Note } from "../../models";

const updateNote = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { content } = request.body;

    try {
        const [, updatedNote] = await Note.update(
            { content },
            { where: { id: Number(id) }, returning: true }
        );

        response.status(200).json(updatedNote);
    } catch (error) {
        response.status(400).json({ error });
    }
};

export { updateNote };
