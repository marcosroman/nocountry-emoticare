import { Router } from 'express'
import { startConsultaController,  endConsultaController }
	from '../controllers/consultasController.js';
import { validateStartConsulta, validateEndConsulta }
	from '../middlewares/consultasMiddleware.js';

const router = Router();

router.post('/consulta/start',
	validateStartConsulta, startConsultaController);
router.post('/consulta/end',
	validateEndConsulta, endConsultaController);

export default router;
