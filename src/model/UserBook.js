import { DataTypes } from 'sequelize';
import sequelize from '../config.js';
import User from './User.js';
import Book from './Book.js';

const UserBook = sequelize.define('UserBook', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    borrowedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    }
});

User.belongsToMany(Book, { through: UserBook });
Book.belongsTo(User, { through: UserBook });

export default UserBook;