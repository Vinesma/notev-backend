const sequelize = require("../db/connect");
const Note = require("../models/note.model");

const drop = async () => {
    try {
        await sequelize.drop();
        console.info("All tables dropped!");
    } catch (error) {
        console.error("An error occurred while dropping!", error);
    }
};

drop();
