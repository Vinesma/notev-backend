import { DataTypes } from "sequelize";
import sequelize from "../db/connect";

interface NoteType {
    id: number;
    content: string;
}

type NoteCreateType = Omit<NoteType, "id">;

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

export { Note, NoteType, NoteCreateType };
