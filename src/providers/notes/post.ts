import { Response } from "express";
import { Request } from "../../types";
import { NoteCreateType } from "../../models";
import sequelize from "../../db/connect";

const addNote = async (
    request: Request<NoteCreateType>,
    response: Response
) => {
    const { models } = sequelize;
    const { body } = request;

    if (body.id)
        return response.status(400).json({
            error: `Bad request: remove id from body request, id is auto assigned by database.`,
        });

    try {
        const newNote = await models.note.create(body);

        response.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        response.status(400).json({ error });
    }
};

export { addNote };
