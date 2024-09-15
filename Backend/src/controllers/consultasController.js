import { getConsulta, startConsulta, endConsulta, getNotasConsulta, postNotaConsulta } from '../models/consultasModel.js';

export const getConsultaController = async (req, res) => {
	const { id_consulta } = req.params;
	
	try {
		const consulta = await getConsulta(id_consulta);
		
		if (consulta) {
			return res.status(400).json(consulta);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

export const startConsultaController = async (req, res) => {
	const { id_agendamiento } = req.params;
	
	try {
		const consulta = await startConsulta(id_agendamiento);
		
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
	const { id_consulta } = req.params;
	
	try {
		const consulta = await endConsulta(id_consulta);
		
		if (consulta) {
			return res.status(400).json(consulta);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

export const getNotasConsultaController = async (req, res) => {
	const { id_consulta } = req.params;
	
	try {
		const notas = await getNotasConsulta(id_consulta);

		if (notas) {
			return res.status(400).json(notas);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

export const postNotaConsultaController = async (req, res) => {
	const { id_consulta } = req.params;
	const { nota } = req.body;
	
	try {
		const nota = await postNotaConsulta(id_consulta, nota);

		if (nota) {
			return res.status(400).json(nota);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

export const getConclusionConsultaController = async (req, res) => {
	const { id_consulta } = req.params;

	try {
		const conclusion = await getConclusionesConsulta(id_consulta);
		
		if (conclusion) {
			return res.status(400).json(conclusion);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}

export const postConclusionConsultaController = async (req, res) => {
	const { id_consulta } = req.params;
	const { conclusion } = req.body;
	
	try {
		const conclusion = await postConclusionConsulta(id_consulta, conclusion);
		
		if (conclusion) {
			return res.status(400).json(conclusion);
		} else {
			return res.status(500);
		}
	} catch(error) {
		console.error(error);
	}
}
