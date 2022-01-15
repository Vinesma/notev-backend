import { DataTypes, Optional, Sequelize } from "sequelize";

interface NoteType {
    id: number;
    content: string;
    userId: number;
    pinned: boolean;
}

type NoteCreateType = Optional<NoteType, "id" | "userId">;

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
            pinned: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            modelName: "note",
        }
    );
};

export { NoteType, NoteCreateType };
