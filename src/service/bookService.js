import Book from '../model/Book.js'

export const getAllBooks = async ()=> {
    try {
        const users = await Book.findAll();
        return users;
    } catch (error) {
        console.log('Query of getAllBooks has failed!', error.message);
    }
};

export const getBook = async(bookId)=> {
    try {
        const user = await Book.findOne({where: {id: bookId}});        
        return user;
    } catch (error) {
        console.log('Query of getUser has failed!', error.message);
    }
};

export const createBook = async (data)=> {
    try {        
        const book = await Book.create(data);
        return book;
    } catch (error) {
        console.log('createBook has failed!', error.message);
    }
}
