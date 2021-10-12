const Note = require("../../models/note.model");

const addNote = async (request, response) => {
    const { content } = request.body;

    try {
        const newNote = await Note.create({ content });

        response.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        response.status(400).json({ error });
    }
};

module.exports = { addNote };