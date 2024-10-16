import { body, param, validationResult } from 'express-validator';
import User from '../model/User.js';
import Book from '../model/Book.js';

export const validateUser = [
    body('name')
        .isString()
        .withMessage('Username must be a string')
        .isLength({ min: 3, max: 18 })
        .withMessage('Username must be at least 3 characters long and at most 18.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateBook = [
    body('name')
        .isString()
        .withMessage('Bookname must be a string')
        .isLength({ min: 3, max: 18 })
        .withMessage('Bookname must be at least 3 characters long and at most 18.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateBorrow = [
    param('uid')
        .isNumeric()
        .withMessage('User ID (uid) must be numeric')
        .isInt({ min: 1 })
        .withMessage('User ID (uid) must be greater than 0'),

    param('bid')
        .isNumeric()
        .withMessage('Book ID (bid) must be numeric')
        .isInt({ min: 1 })
        .withMessage('Book ID (bid) must be greater than 0'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },

    async (req, res, next) => {
        const { uid: userId, bid: bookId } = req.params;

        try {
            const userExists = await User.findByPk(userId);
            if (!userExists) {
                return res.status(404).json({ error: `User with ID ${userId} does not exist.` });
            }

            const bookExists = await Book.findByPk(bookId);
            if (!bookExists) {
                return res.status(404).json({ error: `Book with ID ${bookId} does not exist.` });
            }

            next();
        } catch (error) {
            return res.status(500).json({ error: 'Server error while validating IDs.' });
        }
    }
];

