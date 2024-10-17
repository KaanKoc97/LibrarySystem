import { getBook } from "../service/bookService.js";
import Book from '../model/Book.js'

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