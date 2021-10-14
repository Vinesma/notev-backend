import { Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    const { user, note } = sequelize.models;

    user.hasMany(note);
    note.belongsTo(user, {
        foreignKey: {
            allowNull: false,
        },
    });
};
