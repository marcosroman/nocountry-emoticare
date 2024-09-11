import { Router } from 'express'
import { validateHorariosUpdate } from '../middlewares/horariosMiddleware.js'
import { updateHorariosController }  from '../controllers/horariosController.js'

const router = Router()

/**
 * @swagger
 * /horarios/actualizar:
 *   post:
 *     summary: Update horarios habilitados|disponibles por medico
 *     tags:
 *       - horarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               id_medico:
 *                 type: integer
 *               dias_disponibles:
 *                 description: array de dias de la semana disponibles para el medico (0=domingo, 1=lunes, ...)
 *                 type: array
 *                 items:
 *                   type: integer
 *                   minimum: 0
 *                   maximum: 6
 *                 uniqueItems: true
 *               horario_inicio_jornada:
 *                 description: hora de inicio de jornada del medico (hh:mm)
 *                 type: string
 *                 format: time
 *                 pattern: '^([01]\d|2[0-3]):([0-5]\d)$'
 *               horario_fin_jornada:
 *                 description: hora de fin de jornada del medico (hh:mm)
 *                 type: string
 *                 format: time
 *                 pattern: '^([01]\d|2[0-3]):([0-5]\d)$'
 *               minutos_sesion:
 *                 description: duracion de una sesion
 *                 type: integer
 *                 minimum: 0
 *               minutos_descanso:
 *                 description: duracion de descanso entre turnos
 *                 type: integer
 *                 minimum: 0
 *             required:
 *               - id_medico
 *               - dias_disponibles
 *               - horario_inicio_jornada
 *               - horario_fin_jornada
 *               - minutos_sesion
 *               - minutos_descanso
 *           example:
 *             id_medico: 19
 *             dias_disponibles: [1,2,3,4]
 *             horario_inicio_jornada: "09:00"
 *             horario_fin_jornada: "17:00"
 *             minutos_sesion: 45
 *             minutos_descanso: 15
 *     responses:
 *       200:
 *         description: horarios disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_medico:
 *                     type: integer
 *                   dia_semana:
 *                     type: integer
 *                   horario_inicio:
 *                     type: string
 *                   horario_fin:
 *                     type: string
 *       404:
 *         description: medico no existe
 *         content:
 *           application/json:
 *             schema:
 *               horarios_disponibles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id_medico:
 *                       type: integer
 */
router.post('/horarios/actualizar',
	validateHorariosUpdate, updateHorariosController);

export default router

