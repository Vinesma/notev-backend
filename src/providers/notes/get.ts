import { Response, Request } from "express";
import { Note } from "../../models";

const getAllNotes = async (request: Request, response: Response) => {
    const notes = await Note.findAll();

    response.status(200).json(notes);
};

const getNote = async (request: Request, response: Response) => {
    const { id } = request.params;
    const note = await Note.findByPk(Number(id));

    if (note) {
        response.status(200).json(note);
    } else {
        response.status(404).end();
    }
};

export { getAllNotes, getNote };
