import { Sequelize } from "sequelize";

const sequelize = new Sequelize("notiv", "admin", "", { dialect: "postgres" });

export default sequelize;
