import { Router } from 'express'
import { getConsultaController, startConsultaController,
	endConsultaController, getNotasConsultaController,
	postNotaConsultaController }
	from '../controllers/consultasController.js';
import { validateGetConsulta, validateStartConsulta,
	validateEndConsulta, validateGetNotasConsulta,
	validatePostNotaConsulta }
	from '../middlewares/consultasMiddleware.js';

const router = Router();

router.get('/consultas/:id_consulta',
	validateGetConsulta, getConsultaController);
router.put('/consultas/iniciar/:id_agendamiento',
	validateStartConsulta, startConsultaController);
router.put('/consulta/:id_consulta/finalizar',
	validateEndConsulta, endConsultaController);
router.get('/consultas/:id_consulta/notas',
	validateGetNotasConsulta, getNotasConsultaController);
router.post('/consultas/:id_consulta/notas/agregar',
	validatePostNotaConsulta, postNotaConsultaController);

export default router;
