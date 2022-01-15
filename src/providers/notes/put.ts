import { Response } from "express";
import { Request } from "../../types";
import { NoteCreateType } from "../../models";
import sequelize from "../../db/connect";
import decodeToken from "../../helpers/decodeToken";

const updateNote = async (
    request: Request<NoteCreateType>,
    response: Response
) => {
    const { models } = sequelize;
    const { id } = request.params;
    const { id: bodyId, userId: bodyUserId, ...note } = request.body;

    try {
        const { id: userId } = decodeToken(request.headers);
        const [, updatedNote] = await models.note.update(
            { ...note },
            {
                where: { id: Number(id), userId: Number(userId) },
                returning: true,
            }
        );

        if (updatedNote.length > 0) {
            response.status(200).json(updatedNote);
        } else {
            response.status(404).end();
        }
    } catch (error) {
        response.status(400).json({ error });
    }
};

export { updateNote };
