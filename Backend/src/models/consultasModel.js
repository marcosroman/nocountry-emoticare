import pool from '../config/config.js';
import { updateAgendamientoState } from './agendamientosModel.js';

// crear|iniciar consulta (con id_agendamiento, fechahora_inicio), cambia estado del agendamiento (turno) a INICIADO
export const startConsulta = async (id_agendamiento) => {
	try {
		const res1 = await pool.query(
			`INSERT INTO consultas (id_agendamiento, fechahora_inicio, creadaEl, actualizadaEl)
			VALUES ($1, NOW(), TO_CHAR(NOW(),'DD-MM-YYYY'), TO_CHAR(NOW(),'DD-MM-YYYY')) RETURNING *`,
			[id_agendamiento]
		);
		
		// const res2 = await updateAgendamientoState(id_agendamiento, 'INICIADO');
		
		//return { agendamiento: res2.rows[0], ...res1.rows[0] };
		return res1.rows[0];
	} catch(error) {
		console.error(error);
	}
}

// terminar consulta (con id de consulta y fechahora_fin), cambia estado del agendamiento a FINALIZADO
export const endConsulta = async (id_consulta) => {
	try {
		const res1 = await pool.query(
			`UPDATE consultas SET fechahora_fin=NOW(), actualizadaEl=TO_CHAR(NOW(),'DD-MM-YYYY') WHERE id=$1 RETURNING *`,
			[id_consulta]
		);
		
		const id_agendamiento = res1.rows[0].id_agendamiento;
		
		const res2 = await updateAgendamientoState(id_agendamiento, 'INICIADO');
		
		//return { agendamiento: res2.rows[0], ...res1.rows[0] };
		return res1.rows[0];
	} catch(error) {
		console.error(error);
	}
}

// obtener datos de consulta por id
export const getConsulta = async (id_consulta) => {
	try {
		const res = await pool.query(
			`SELECT * from consultas WHERE id=$1`,
			[id_consulta]
		);
		
		return res.rows[0];
	} catch (error) {
		console.error(error);
	}
}

// grabar nueva nota de consulta
export const postNotaConsulta = async (id_consulta, nota) => {
	try {
		const res = await pool.query(
			`INSERT INTO notas_consultas (id_consulta,nota,creadaEl,actualizadaEl)
			VALUES ($1,$2,$3,TO_CHAR(NOW(),'DD-MM-YYYY'),TO_CHAR(NOW(),'DD-MM-YYYY'))
			RETURNING *1`,
			[id_consulta, nota]);
		
		return res.rows[0];
	} catch (error) {
		console.error(error);
	}
}

// obtener notas de consulta
export const getNotasConsulta  = async (id_consulta) => {
	try {
		const res = await pool.query(
			`SELECT * FROM notas_consultas WHERE id_consulta=$1`,
			[id_consulta]
		);
		
		return res.rows;
	} catch (error) {
		console.error(error);
	}
}


/*
// buscar consultas (input {id_medico, id_paciente, fechahora_inicio, fechahora_fin}; es obligatorio poner (fechas OR (id_medico OR id_paciente))
export const findConsultas = async (id_medico, id_paciente, fechahora_inicio, fechahora_fin) => {
}

// eliminar nota de consulta
deleteNotaConsulta
*/

