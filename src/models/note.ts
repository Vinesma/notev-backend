import { DataTypes, Optional, Sequelize } from "sequelize";

interface NoteType {
    id: number;
    content: string;
    userId: number;
}

type NoteCreateType = Optional<NoteType, "id">;

export default (sequelize: Sequelize) => {
    sequelize.define(
        "note",
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
            modelName: "note",
        }
    );
};

export { NoteType, NoteCreateType };
