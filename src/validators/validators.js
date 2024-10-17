import { body, param, validationResult } from 'express-validator';
import User from '../model/User.js';
import Book from '../model/Book.js';
import UserBook from '../model/UserBook.js';

export const validateGetUser = [
    param('id')
        .isNumeric()
        .withMessage('User ID (id) must be numeric')
        .isInt({ min: 1 })
        .withMessage('User ID (id) must be greater than 0'),
    
    (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },

    async (req, res, next) => {
        try {
            const { id:id } = req.params;       
            const userExists = await User.findByPk(id);
            if (!userExists) {
                return res.status(400).json({ error: `User with ${id} does not exist.` });
            }

            next();
        } catch (error) {
            return res.status(500).json({ error: 'Server error while validating names.' });
        }
    }
];

export const validateCreateUser = [
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

    async (req, res, next) => {
        const { name: name } = req.body;

        try {
            const userNameDuplicate = await User.findOne({where: { name: name }});
            if(userNameDuplicate){
                return res.status(400).json({ error: `User with ${name} already exists.` });
            }
            next();
        } catch (error) {
            return res.status(500).json({ error: 'Server error while validating names.' });
        }
    }
];

export const validateGetBook = [
    param('id')
        .isNumeric()
        .withMessage('User ID (id) must be numeric')
        .isInt({ min: 1 })
        .withMessage('User ID (id) must be greater than 0'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },

    async (req, res, next) => {
        const { id: id } = req.params;
        try {
            const bookExist = await Book.findByPk(id);
            if(!bookExist){
                return res.status(400).json({ error: `Book with ${id} does not exist.` });
            }
            next();
        } catch (error) {
            return res.status(500).json({ error: 'Server error while validating names.' });
        }
    }
];

export const validateCreateBook = [
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

    async (req, res, next) => {
        const { id: id, name: name} = req.body;

        try {
            const bookDuplicate = await Book.findByPk(id);
            if (bookDuplicate) {
                return res.status(400).json({ error: `User with ${id} already exists.` });
            }

            const bookNameDuplicate = await Book.findOne({where: { name: name }});
            if (bookNameDuplicate) {
                return res.status(400).json({ error: `User with ${name} already exists.` });
            }

            next();
        } catch (error) {
            return res.status(500).json({ error: 'Server error while validating names.' });
        }
    }
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
                return res.status(400).json({ error: `User with ID ${userId} does not exist.` });
            }

            const bookExists = await Book.findByPk(bookId);
            if (!bookExists) {
                return res.status(400).json({ error: `Book with ID ${bookId} does not exist.` });
            }

            const duplicateBorrow = await UserBook.findOne({where: { userId:userId, bookId:bookId }});
            if(duplicateBorrow) {
                return res.status(400).json({ error: `Duplicate borrow of book ${bookId} by user ${userId} is not allowed.`});
            }

            next();
        } catch (error) {
            return res.status(500).json({ error: 'Server error while validating IDs.' });
        }
    }
];

