const Note = require("../../models/note.model");

const updateNote = async (request, response) => {
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

module.exports = { updateNote };