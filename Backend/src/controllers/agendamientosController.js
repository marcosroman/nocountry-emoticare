import { getAllAgendamientos, getAllAgendamientosPaciente, getAgendamiento, agendar,
	getAgendamientosDisponibles, updateAgendamientoState }
	from '../models/agendamientosModel.js';

export const getAllAgendamientosController = async (req, res) => {
	const { id_paciente } = req.query;

	console.log({id_paciente});

	try {
		let agendamientos;

		if (id_paciente) 
			agendamientos = await getAllAgendamientosPaciente(id_paciente);
		else 
			agendamientos = await getAllAgendamientos();

		if (agendamientos) {
			return res.json(agendamientos);
		} else {
			return res.json({error: "?"});
		}
	} catch (error) {
		console.error(error);
		console.error('Error al buscar agendamiento');
		res.status(500).json({ error: 'Error interno del servidor.' });
	}
}

export const getAgendamientoController = async (req, res) => {
	const { id_agendamiento } = req.params;

	try {
		const agendamiento = await getAgendamiento(id_agendamiento);

		if (agendamiento) {
			return res.json(agendamiento);
		} else {
			return res.json({error: "agendamiento no existe"});
		}
	} catch (error) {
		console.error('Error al buscar agendamiento');
		res.status(500).json({ error: 'Error interno del servidor.' });
	}
}

export const getAgendamientosDisponiblesController = async (req, res) => {
	const { id_medico }  = req.params;
	const { fechahora_inicio, fechahora_fin } = req.query;

	console.log({fechahora_inicio,fechahora_fin});

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
	const { id_medico } = req.params;
	const { id_paciente, fechahora_inicio, fechahora_fin } = req.body;

	try {
		const turno = await agendar(id_medico, id_paciente,
			fechahora_inicio, fechahora_fin);

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

export const updateAgendamientoStateController = async (req, res) => {
	const { id_agendamiento } = req.params;
	const { estado } = req.body;

	try {
		const agendamiento = await updateAgendamientoState(id_agendamiento, estado);

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
