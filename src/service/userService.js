import User from '../model/User.js'
import UserBook from '../model/UserBook.js';
import Book from '../model/Book.js'
import { filterCurrentlyBorrowed } from '../utils/utils.js';

export const getAllUsers = async ()=> {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.log('Query of getAllUsers has failed!', error.message);
    }
};

export const getUser = async (userId)=> {
    try {
        const user = await User.findOne({where: {id: userId}});
        const name = user.name;
        const borrowedBooks = await UserBook.findAll({
            where: { userId: userId },
            include: [
                {
                    model: Book,
                    attributes: ['id', 'name', 'rating'],
                },
            ],
        });
        const bookList = borrowedBooks.map((borrow) => ({
            id: borrow.Book.id,
            name: borrow.Book.name,
            rating: borrow.Book.rating,
        }));
        const currentlyBorrowed = await filterCurrentlyBorrowed(bookList);
        const response = { name: name, borrowedBooks: bookList, currentlyBorrowed: currentlyBorrowed};
        return response;
    } catch (error) {
        console.log('Query of getUser has failed!', error.message);
    }
}
export const createUser = async (data)=> {
    try {
        const book = await User.create(data);
        return book;
    } catch (error) {
        console.log('Query of createUser has failed!', error.message);
    }
}
