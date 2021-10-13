import sequelize from "db/connect";
import { Note } from "models";

const drop = async () => {
    try {
        await sequelize.drop();
        console.info("All tables dropped!");
    } catch (error) {
        console.error("An error occurred while dropping!", error);
    }
};

drop();
