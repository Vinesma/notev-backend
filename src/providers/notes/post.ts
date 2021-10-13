import { Request, Response } from "express";
import { Note } from "../../models";

const addNote = async (request: Request, response: Response) => {
    const { content } = request.body;

    try {
        const newNote = await Note.create({ content });

        response.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        response.status(400).json({ error });
    }
};

export { addNote };
