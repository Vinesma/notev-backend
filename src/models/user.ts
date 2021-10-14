import bcrypt from "bcrypt";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface UserType extends Model {
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

interface UserCreateType
    extends Optional<UserType, "id" | "createdAt" | "updatedAt"> {}

const passwordSaltRounds = 10;

export default (sequelize: Sequelize) => {
    sequelize.define<UserType>(
        "user",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    minLen: (value: string) => {
                        if (value.length < 4) {
                            throw new Error(
                                "Password can't be smaller than 4 characters"
                            );
                        }
                    },
                },
            },
        },
        {
            hooks: {
                beforeCreate: (user, options) => {
                    if (!user.changed("password" as any)) return;
                    return bcrypt
                        .hash(
                            user.get("password") as string,
                            passwordSaltRounds
                        )
                        .then(hash =>
                            user.setDataValue("password" as string, hash)
                        );
                },
                beforeUpdate: (user, options) => {
                    if (!user.changed("password" as any)) return;
                    return bcrypt
                        .hash(
                            user.get("password") as string,
                            passwordSaltRounds
                        )
                        .then(hash =>
                            user.setDataValue("password" as string, hash)
                        );
                },
            },
        }
    );
};

export { UserType, UserCreateType };
