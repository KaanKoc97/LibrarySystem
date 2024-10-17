import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Book = sequelize.define('Book',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
            min: 0
        },
    }
});

export default Book;