import sequelize from "db/connect";
import { Note } from "models";

const sync = async () => {
    try {
        await sequelize.sync();
        console.info("All tables synced!");
    } catch (error) {
        console.error("An error occurred while syncing", error);
    }
};

sync();
