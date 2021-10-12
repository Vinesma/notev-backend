const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("notiv", "admin", "", { dialect: "postgres" });

module.exports = sequelize;
