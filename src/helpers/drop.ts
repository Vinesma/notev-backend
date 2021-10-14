import sequelize from "../db/connect";

const drop = async () => {
    try {
        const { models } = sequelize;
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
