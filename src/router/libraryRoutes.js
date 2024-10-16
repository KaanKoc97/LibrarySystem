import { Router } from 'express';
import libraryController from '../controller/librayController.js'

const router = Router();

router.get('/', libraryController.listBooks);

export default router;