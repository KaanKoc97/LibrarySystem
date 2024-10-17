import UserBook from '../model/UserBook.js'
import { getBook } from './bookService.js';
import { cumulativeAverage, incrementVotesbyPk, updateRating, updateReturnDate } from '../utils/utils.js';

export const borrowBook = async (uid, bid)=> {
    try {
        const issue = UserBook.create({userId: uid, bookId: bid});
        return issue;
    } catch (error) {
        console.log('Borrowing operation has failed!', error.message);
    }
}

export const returnABook = async (uid, bid, lastRating)=> {
    try {
        const book = await getBook(bid);        
        const rating = book.rating;       
        const prevVotes = book.votes;
        const newRating = cumulativeAverage(rating, lastRating, prevVotes);  
        const resultIncrement = incrementVotesbyPk(bid);
        const resultUpdate = updateRating(newRating, bid);
        const resultReturnDate = updateReturnDate(uid, bid);
        return resultUpdate;

    } catch (error) {
        console.log('Returning operation has failed!', error.message);
    }
}