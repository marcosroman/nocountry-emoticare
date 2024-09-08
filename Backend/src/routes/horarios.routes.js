import { Router } from 'express'
import { validateHorariosUpdate } from '../middlewares/horariosMiddleware.js'
import { updateHorariosController }  from '../controllers/horariosController.js'

const router = Router()

/**
 * @swagger
 * /horarios/actualizar
 * 	post:
 * 		summary: Update horarios habilitados|disponibles por medico
 * 		requestBody:
 * 			required: true
 * 			content:
 * 				application/json:
 * 					schema:
 * 						type: object
 * 						properties: 
 * 							id_medico:
 * 								type: integer
 * 								required: true
 * 							dias_disponibles:
 * 								type: array
 * 								items:
 * 									type: integer
 * 								required: true
 * 							horario_inicio_jornada:
 * 								type: string
 * 								required: true
 * 							horario_fin_jornada
 * 								type: string
 * 								required: true
 * 							minutos_sesion
 * 								type: integer
 * 								required: true
 * 							minutos_descanso
 * 								type: integer
 * 								required: true
 * 		responses:
 * 			200:
 * 				description: horarios disponibles
 * 				content:
 * 					application/json:
 * 						schema:
 * 							type: array
 * 							items:
 * 								type: object
 * 								properties:
 * 									id_medico:
 * 										type: integer
 * 									dia_semana
 * 										type: integer
 * 									horario_inicio
 * 										type: string
 * 									horario_fin
 * 										type: string
 * 			404:
 * 				description: medico no existe
 * 				content:
 * 					application/json:
 * 						schema:
 * 							type: array
 * 									
 */
router.post('/horarios/actualizar', validateHorariosUpdate, updateHorariosController )

export default router
