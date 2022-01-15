import { Response } from "express";
import { Request } from "../../types";
import { NoteCreateType } from "../../models";
import decodeToken from "../../helpers/decodeToken";
import sequelize from "../../db/connect";

const addNote = async (
    request: Request<NoteCreateType>,
    response: Response
) => {
    const { models } = sequelize;
    const { body } = request;

    if (body.id || body.userId)
        return response.status(400).json({
            error: `Bad request: remove id from body request`,
        });

    try {
        const { id: userId } = decodeToken(request.headers);
        const newNote = await models.note.create({ ...body, userId });

        response.status(201).json(newNote);
    } catch (error) {
        response.status(400).json({ error });
    }
};

export { addNote };
