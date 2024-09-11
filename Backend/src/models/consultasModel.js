import pool from '../config/config.js';
import { updateAgendamientoState } from './agendamientosModel.js'

// crear|iniciar consulta (con id_agendamiento, fechahora_inicio), cambia estado del agendamiento (turno) a INICIADO
export const startConsulta = async (id_agendamiento, fechahora_inicio) => {
	try {
		const res1 = await pool.query(
			`INSERT INTO consultas (id_agendamiento, fechahora_inicio, creadaEl, actualizadaEl) VALUES ($1, $2, TO_CHAR(NOW(),'DD-MM-YYYY'), TO_CHAR(NOW(),'DD-MM-YYYY')) RETURNING *`,
			[id_agendamiento, fechahora_inicio]
		);

		const res2 = await updateAgendamientoState(id_agendamiento, 'INICIADO');

		return { agendamiento: res2.rows[0], ...res1.rows[0] };
	} catch(error) {
		console.error(error);
	}
}

// terminar consulta (con id de consulta y fechahora_fin), cambia estado del agendamiento a FINALIZADO
export const endConsulta = async (id, fechahora_fin) => {
	try {
		const res1 = await pool.query(
			`UPDATE consultas SET fechahora_fin=$2, actualizadaEl=TO_CHAR(NOW(),'DD-MM-YYYY') WHERE id=$1 RETURNING *`,
			[id, fechahora_fin]
		);

		const id_agendamiento = res1.rows[0].id_agendamiento;

		const res2 = await updateAgendamientoState(id_agendamiento, 'INICIADO');

		return { agendamiento: res2.rows[0], ...res1.rows[0] };
	} catch(error) {
		console.error(error);
	}
}

/*
// buscar consultas (input {id_medico, id_paciente, fechahora_inicio, fechahora_fin}; es obligatorio poner (fechas OR (id_medico OR id_paciente))
export const findConsultas = async (id_medico, id_paciente, fechahora_inicio, fechahora_fin) => {
}

// grabar nueva nota de consulta
saveNotaConsulta

// actualizar nota de consulta
saveNotaConsulta

// eliminar nota de consulta
deleteNotaConsulta
*/

