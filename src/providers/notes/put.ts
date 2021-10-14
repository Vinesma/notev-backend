import { Response } from "express";
import { Request } from "../../types";
import { NoteCreateType } from "../../models";
import sequelize from "../../db/connect";

const updateNote = async (
    request: Request<NoteCreateType>,
    response: Response
) => {
    const { models } = sequelize;
    const { id } = request.params;
    const { content } = request.body;

    try {
        const [, updatedNote] = await models.note.update(
            { content },
            { where: { id: Number(id) }, returning: true }
        );

        response.status(200).json(updatedNote);
    } catch (error) {
        response.status(400).json({ error });
    }
};

export { updateNote };
