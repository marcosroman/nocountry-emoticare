import { Router } from 'express'
import { validateHorariosUpdate } from '../middlewares/horariosMiddleware.js'
import { updateHorariosController }  from '../controllers/horariosController.js'

const router = Router();

router.put('/horarios/actualizar/:id_medico',
	validateHorariosUpdate, updateHorariosController);

export default router;

