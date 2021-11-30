import { userController } from 'controllers/UserController';
import { Router } from 'express';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.get);
router.post('/', userController.insert);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
