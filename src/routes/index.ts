import { Router } from 'express';
import jobsController from '../controllers';

const router = Router();

router.get('/:id', jobsController);

export default router;
