import { getAgendamiento, agendar,
	getAgendamientosDisponibles, setAgendamientoState }
	from '../models/agendamientosModel.js';

export const getAgendamientoController = async (req, res) => {
	const { id_agendamiento } = req.body;

	try {
		const agendamiento = await getAgendamiento(id_agendamiento);

		if (agendamiento) {
			return res.json(agendamiento);
		} else {
			return res.json({error: "agendamiento no disponible"});
		}
	} catch (error) {
		console.error('Error al buscar agendamiento');
		res.status(500).json({ error: 'Error interno del servidor.' });
	}
}

export const getAgendamientosDisponiblesController = async (req, res) => {
	const { id_medico, fechahora_inicio, fechahora_fin } = req.body;

	try {
		const turnosDisponibles = await getAgendamientosDisponibles(id_medico,
			fechahora_inicio, fechahora_fin);

		return res.json(turnosDisponibles);
	} catch(error) {
		console.log('Error al buscar turnos disponibles');
		res.status(500).json({ error: 'Error interno del servidor.' });
	}
}

export const agendarController = async (req, res) => {
	const { id_medico, id_paciente, fechahora_inicio, fechahora_fin } = req.body;

	try {
		const turno = await agendar(id_medico, id_paciente, fechahora_inicio, fechahora_fin);

		if (turno) {
			return res.json(turno);
		} else {
			return res.json({error: 'no se puede agendar el turno'});
		}
	} catch(error) {
		console.log('Error al agendar turno');
		res.status(500).json({ error: 'Error interno del servidor.' });
	}
}

export const setAgendamientoStateController = async (req, res) => {
	const { id_agendamiento, estado } = req.body;

	try {
		const agendamiento = await setAgendamientoState(id_agendamiento, estado);

		if (agendamiento) {
			return res.json(agendamiento);
		} else {
			return res.json({error: 'no se pudo cambiar el estado'});
		}
	} catch(error) {
		console.log('Error al cambiar estado de agendamiento');
		res.status(500).json({ error: 'Error interno del servidor.' });
	}
}

