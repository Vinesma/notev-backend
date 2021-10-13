import { DataTypes } from "sequelize";
import sequelize from "../db/connect";

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
        modelName: "Note",
    }
);

export default Note;
