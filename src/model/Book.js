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
        allowNull: false,
    },
    copy: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
    }
});

export default Book;