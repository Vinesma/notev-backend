const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect");

const Note = sequelize.define(
    "Note",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Note",
    }
);

module.exports = Note;
