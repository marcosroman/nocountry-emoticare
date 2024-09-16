import { Router } from 'express'
import { getAllAgendamientosController, getAgendamientoController,
	getAgendamientosDisponiblesController, agendarController,
	updateAgendamientoStateController }
	from '../controllers/agendamientosController.js';
import { validateGetAgendamiento,
	validateGetAgendamientosDisponibles, validateAgendar,
	validateUpdateAgendamientoState}
	from '../middlewares/agendamientosMiddleware.js';

const router = Router()

router.get('/agendamientos',
	getAllAgendamientosController);
router.get('/agendamientos/:id_agendamiento',
	validateGetAgendamiento, getAgendamientoController);
router.put('/agendamientos/estado/:id_agendamiento',
	validateUpdateAgendamientoState, updateAgendamientoStateController);
router.post('/agendamientos/agendar/:id_medico',
	validateAgendar, agendarController);
router.get('/agendamientos/disponibles/:id_medico',
	validateGetAgendamientosDisponibles, getAgendamientosDisponiblesController);

export default router
