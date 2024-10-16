import { Router } from 'express';
import bookController from '../controller/bookController.js'
import userController from '../controller/userController.js';
import relationController from '../controller/relationController.js'
import { validateUser, validateBorrow, validateBook } from '../validators/validators.js';

const router = Router();

router.get('/books', bookController.listBooks);
router.get('/books/:id', bookController.getABook);
router.post('/books', validateBook, bookController.createNewBook);

router.get('/users', userController.listUsers);
router.get('/users/:id', userController.getAUser)
router.post('/users', validateUser ,userController.createNewUser);

router.post('/users/:uid/borrow/:bid', validateBorrow ,relationController.borrow)

export default router;