const sequelize = require("../db/connect");
const Note = require("../models/note.model");

const sync = async () => {
    try {
        await sequelize.sync();
        console.info("All tables synced!");
    } catch (error) {
        console.error("An error occurred while syncing", error);
    }
};

sync();
