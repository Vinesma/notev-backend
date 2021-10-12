const Note = require("../../models/note.model");

const deleteNote = async (request, response) => {
    const { id } = request.params;

    try {
        await Note.destroy({ where: { id: Number(id) } });

        response.status(200).json({ message: "Delete successful" });
    } catch (error) {
        response.status(400).json({ error });
    }
};

module.exports = { deleteNote };