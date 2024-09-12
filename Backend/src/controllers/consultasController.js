import { startConsulta, endConsulta } from '../models/consultasModel.js';

export const startConsultaController = async (req, res) => {
	const { id_agendamiento, fechahora_inicio } = req.body;
	
	try {
		const consulta = await startConsulta(id_agendamiento, fechahora_inicio);

		if (consulta) {
			return res.status(400).json(consulta);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

export const endConsultaController = async (req, res) => {
	const { id, fechahora_fin } = req.body;
	
	try {
		const consulta = await endConsulta(id, fechahora_fin);

		if (consulta) {
			return res.status(400).json(consulta);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

