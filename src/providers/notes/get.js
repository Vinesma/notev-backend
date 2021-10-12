const Note = require("../../models/note.model");

const getAllNotes = async (_, response) => {
    const notes = await Note.findAll();

    response.status(200).json(notes);
};

const getNote = async (request, response) => {
    const { id } = request.params;
    const note = await Note.findByPk(Number(id));

    if (note) {
        response.status(200).json(note);
    } else {
        response.status(404).end();
    }
};

module.exports = { getAllNotes, getNote };