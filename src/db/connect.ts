import { Sequelize } from "sequelize";
import * as modelDefiners from "../models";

const sequelize = new Sequelize(
    process.env.POSTGRES_DB!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD!,
    { dialect: "postgres", host: process.env.POSTGRES_HOST! }
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
