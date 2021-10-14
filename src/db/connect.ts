import { Sequelize } from "sequelize";
import * as modelDefiners from "../models";

const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    { dialect: "postgres", host: process.env.DB_HOST! }
);

let model: keyof typeof modelDefiners;

// Define models
for (model in modelDefiners) {
    if (model !== "makeAssociations") {
        modelDefiners[model](sequelize);
    }
}

// Make associations
modelDefiners["makeAssociations"](sequelize);

export default sequelize;
