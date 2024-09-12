import pool from '../config/config.js';
import { getHorarios } from './horariosModel.js';

// get agendamiento por id
export const getAgendamiento = async (id_agendamiento) => {
	try {
		const res = await pool.query(
			`SELECT * FROM agendamientos WHERE id=$1`,
			[id_agendamiento]
		);
		return res.rows[0];
	} catch(error) {
		console.log(error);
	}
}

// cambiar estado de un agendamiento
export const updateAgendamientoState = async (id_agendamiento, estado) => {
	try {
		const res = await pool.query(
			`UPDATE agendamientos SET estado=$2, actualizadaEl=TO_CHAR(NOW(),
				'DD-MM-YYYY') WHERE id=$1 RETURNING *`,
			[id_agendamiento, estado]
		);

		return res.rows[0];
	} catch(error) {
		console.log(error);
	}
}

// agendar turno
export const agendar = async (id_medico, id_paciente,
	fechahora_inicio, fechahora_fin) => {
	try {
		const isDisponible = await checkAgendamiento(id_medico,
			fechahora_inicio, fechahora_fin);

		if (isDisponible) {
			const query = await pool.query(
				`INSERT INTO agendamientos (id_medico, id_paciente,
					fechahora_inicio, fechahora_fin, estado, creadaEl, actualizadaEl)
					VALUES ($1, $2, $3, $4, 'RESERVADO',
					TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'))
					RETURNING *`,
				[id_medico, id_paciente, fechahora_inicio, fechahora_fin]
			);

			return query.rows[0];
		} else {
			return [];
		}
	} catch(error) {
		console.log(error);
	}
}

// verificar disponibilidad de turno ( (id_medico, fecha, hora_inicio,
// hora_fin) => bool (veo que el medico no tenga un turno agendado en 
// conflicto con el rango hora_inicio-hora_fin)),
export const checkAgendamiento = async (id_medico,
	fechahora_inicio, fechahora_fin) => {
	try {
		const res = await pool.query(
			`SELECT * FROM agendamientos WHERE
			NOT ((fechahora_fin<$2::timestamp)
			OR ($3::timestamp<fechahora_inicio))
			AND id_medico=$1 AND estado!='CANCELADO'`,
			[id_medico, fechahora_inicio, fechahora_fin]
		);

		return res.rowCount === 0;
	} catch(error) {
		console.log(error);
	}
}

// ver turnos disponibles con un medico para un rango de fechas 
export const getAgendamientosDisponibles = async (id_medico,
	fechahora_inicio, fechahora_fin) => {
	function generateDateRange(startDateStr, endDateStr) {
    // Parse the ISO date strings into Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
		
    // Initialize an empty array to hold the dates
    const dates = [];
		
    // Loop from the start date to the end date, incrementing by one day
    let currentDate = new Date(startDate);
		
		while (currentDate <= endDate) {
			// fecha YYYY-MM-DD y dia de la semana {entre 0 y 6 inclusive}
			dates.push({
				fecha: currentDate.toISOString().split('T')[0],
				dia_semana: currentDate.getDay()
			});

			// Increment the current date by one day
			currentDate.setDate(currentDate.getDate() + 1);
		}
		
    return dates;
	}

	try {
		// buscar los turnos no-disponibles del medico para rango de fechas
		const res1 = await pool.query(
				`SELECT * FROM agendamientos WHERE
				NOT ((fechahora_fin<$2::timestamp)
				OR ($3::timestamp<fechahora_inicio))
				AND id_medico=$1 AND estado!='CANCELADO';`,
				[id_medico, fechahora_inicio, fechahora_fin]
		);
		const horariosNoDisponibles = res1.rows;

		console.log({horariosNoDisponibles});
		// obtenemos los horarios habilitados del medico
		const res2 = await pool.query(
			`SELECT * FROM horarios WHERE
			id_medico=$1`,
			[id_medico]
		);
		const horariosHabilitados = res2.rows;

		console.log({horariosHabilitados});
		// listo las fechas en el rango dado junto con dia de la semana
		let fechas = generateDateRange(fechahora_inicio, fechahora_fin);

		// juntamos los datos
		const horariosDisponibles = fechas.map(f =>
			horariosHabilitados
				// agregamos datos de fecha en cada horario habilitado
				.map(h => ({
					fecha: f.fecha,
					fechahora_inicio: new Date(f.fecha+"T"+h.hora_inicio+"Z"),
					fechahora_fin: new Date(f.fecha+"T"+h.hora_fin+"Z"),
					...h}))
				// filtramos dejando solo los horarios correspondientes al dia
				.filter(h => h.dia_semana === f.dia_semana)
				// eliminamos horarios fuera del rango solicitado
				.filter(h =>
					((h.fechahora_inicio	>= new Date(fechahora_inicio)) && (h.fechahora_fin	<= new Date(fechahora_fin))))
				// juntamos todo en un unico array
				.reduce((t,d) => t.concat(d), [])
			)[0]
			// eliminamos los horarios habilitados en conflicto con los horarios no-disponibles
			.filter(ha =>
				horariosNoDisponibles
					.filter(hnd =>
						!((hnd.fechahora_fin < ha.fechahora_inicio)
							|| (ha.fechahora_fin < hnd.fechahora_inicio)))
					.length === 0);

		console.log({horariosDisponibles});

		return horariosDisponibles;
	} catch(error) {
		console.error(error);
	}
}
