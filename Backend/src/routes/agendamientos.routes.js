import { Router } from 'express'
import { getAgendamientoController, getAgendamientosDisponiblesController,
	agendarController, updateAgendamientoStateController }
	from '../controllers/agendamientosController.js';
import { validateGetAgendamiento, validateGetAgendamientosDisponibles,
	validateAgendar, validateUpdateAgendamientoState}
	from '../middlewares/agendamientosMiddleware.js';

const router = Router()

router.post('/agendamientos',
	validateGetAgendamiento, getAgendamientoController);
router.post('/agendamientos/estado',
	validateUpdateAgendamientoState, updateAgendamientoStateController);
router.post('/agendamientos/agendar',
	validateAgendar, agendarController);
router.post('/agendamientos/disponibles',
	validateGetAgendamientosDisponibles, getAgendamientosDisponiblesController);

export default router
