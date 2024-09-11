import { Router } from 'express'
import { getAgendamientoController, getAgendamientosDisponiblesController,
	agendarController, setAgendamientoStateController }
	from '../controllers/agendamientosController.js';
import { validateGetAgendamiento, validateGetAgendamientosDisponibles,
	validateAgendar, validateSetAgendamientoState}
	from '../middlewares/agendamientosMiddleware.js';

const router = Router()

router.post('/agendamientos',
	validateGetAgendamiento, getAgendamientoController);
router.post('/agendamientos/estado',
	validateSetAgendamientoState, setAgendamientoStateController);
router.post('/agendamientos/agendar',
	validateAgendar, agendarController);
router.post('/agendamientos/disponibles',
	validateGetAgendamientosDisponibles, getAgendamientosDisponiblesController);

export default router
