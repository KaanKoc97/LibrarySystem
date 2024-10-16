import { Router } from 'express';
import bookController from '../controller/bookController.js'
import userController from '../controller/userController.js';

const router = Router();

router.get('/books', bookController.listBooks);
router.get('/books/:id', bookController.getABook);
router.post('/books', bookController.createNewBook);

router.get('/users', userController.listUsers);
router.get('/users/:id', userController.getAUser)
router.post('/users', userController.createNewUser);


export default router;