import { Router } from 'express';
import bookController from '../controller/bookController.js'
import userController from '../controller/userController.js';
import relationController from '../controller/relationController.js'
import { validateGetUser, validateCreateUser ,validateBorrow, validateCreateBook, validateGetBook } from '../validators/validators.js';

const router = Router();

router.get('/books', bookController.listBooks);
router.get('/books/:id', validateGetBook, bookController.getABook);
router.post('/books', validateCreateBook, bookController.createNewBook);

router.get('/users', userController.listUsers);
router.get('/users/:id', validateGetUser, userController.getAUser)
router.post('/users', validateCreateUser ,userController.createNewUser);

router.post('/users/:uid/borrow/:bid', validateBorrow ,relationController.borrow)
router.post('/users/:uid/return/:bid', relationController.returnBook);

export default router;