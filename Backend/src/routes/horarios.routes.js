import { Router } from 'express'
import { validateGetHorarios, validateUpdateHorarios } from '../middlewares/horariosMiddleware.js'
import { getHorariosController, updateHorariosController }  from '../controllers/horariosController.js'

const router = Router();

router.get('/horarios/:id_medico',
	validateGetHorarios, getHorariosController);

router.put('/horarios/actualizar/:id_medico',
	validateUpdateHorarios, updateHorariosController);

export default router;

