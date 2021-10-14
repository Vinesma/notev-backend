import * as models from "../models";

const sync = async () => {
    try {
        let key: keyof typeof models;

        for (key in models) {
            await models[key].sync();
        }

        console.info("All tables synced!");
    } catch (error) {
        console.error("An error occurred while syncing", error);
    }
};

sync();
