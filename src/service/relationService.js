import UserBook from '../model/UserBook.js'

export const createUserBook = (uid, bid)=> {
    try {
        const issue = UserBook.create({UserId: uid, BookId: bid});
        return issue;
    } catch (error) {
        console.log('Borrowing operation has failed!', error.message);
    }
}