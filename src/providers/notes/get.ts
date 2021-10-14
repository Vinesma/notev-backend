import { Response, Request } from "express";
import sequelize from "../../db/connect";

const getAllNotes = async (request: Request, response: Response) => {
    const { models } = sequelize;
    const notes = await models.note.findAll();

    response.status(200).json(notes);
};

const getNote = async (request: Request, response: Response) => {
    const { models } = sequelize;
    const { id } = request.params;
    const note = await models.note.findByPk(Number(id));

    if (note) {
        response.status(200).json(note);
    } else {
        response.status(404).end();
    }
};

export { getAllNotes, getNote };
