import { getBook } from "../service/bookService.js";
import Book from '../model/Book.js'
import UserBook from "../model/UserBook.js";

export function cumulativeAverage(rating, lastRating, votes) {
    var newRating = (rating * votes + lastRating) / (votes + 1);
    return newRating;
}

export async function incrementVotesbyPk(pk) {
    const oldBook = await getBook(pk);
    const prevVotes = oldBook.votes;
    const newVotes = prevVotes + 1;  
    const result = Book.update({votes: newVotes}, {where:{ id: pk}});
    return result;
}

export async function updateRating(newRating, pk) {  
    const result = Book.update({rating: newRating}, {where:{ id: pk}});
    return result;
}

export async function updateReturnDate(bid, uid) {
    const result = await UserBook.update({ returnDate: new Date()}, {where: {userId:uid, bookId:bid }});
    return result;
}

export async function filterCurrentlyBorrowed(bookList) {
    const currentlyBorrowed  = [];
    for (const book of bookList) {
        const bid = book.id;
        try {
            const result = await UserBook.findOne({ where: { bookId: bid } });
            
            if (result && result.borrowedDate > result.returnDate) {
                currentlyBorrowed.push(book);
            }
        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    }
    return currentlyBorrowed;
}