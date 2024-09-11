import { getDoctorById } from '../models/doctorModel.js';
import { poblarHorarios }
	from '../models/horariosModel.js';

export const updateHorariosController = async (req, res) =>{
  const { id_medico, dias_disponibles,
  horario_inicio_jornada, horario_fin_jornada,
  minutos_sesion, minutos_descanso } = req.body;

  try {
    const findMedicoId = await getDoctorById(id_medico);

		if (findMedicoId) {
			const horarios= await poblarHorarios(
				id_medico, dias_disponibles,
				horario_inicio_jornada, horario_fin_jornada,
				minutos_sesion, minutos_descanso);

			return res.status(400).json(horarios);
		} else {
      return res.status(404).json([], {statusText: "medicx no existe"})
		}

  } catch (error) {
    console.error('Error al actualizar horarios', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

