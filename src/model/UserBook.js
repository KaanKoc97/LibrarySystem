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
    userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: User,
            key: 'id', 
        },
    },
    bookId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: Book,
            key: 'id',
        },
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

User.hasMany(UserBook, { foreignKey: 'userId' });
UserBook.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(UserBook, { foreignKey: 'bookId' });
UserBook.belongsTo(Book, { foreignKey: 'bookId' });

export default UserBook;