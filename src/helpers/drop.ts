import * as models from "../models";

const drop = async () => {
    try {
        let key: keyof typeof models;

        for (key in models) {
            await models[key].drop();
        }

        console.info("All tables dropped!");
    } catch (error) {
        console.error("An error occurred while dropping!", error);
    }
};

drop();
