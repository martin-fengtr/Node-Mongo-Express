import { eventController } from 'controllers/EventController';
import { Router } from 'express';

const router = Router();

router.get('/', eventController.getAll);
router.get('/:id', eventController.get);
router.post('/', eventController.insert);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.delete);

export default router;
