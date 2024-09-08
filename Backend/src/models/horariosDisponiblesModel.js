import pool from '../config/config.js'
import format from 'pg-format';

// poblar horarios disponibles por medico
export const poblarHorariosDisponiblesPorMedico = async (
	id_medico, dias_disponibles,
	horario_inicio_jornada, horario_fin_jornada,
	minutos_sesion, minutos_descanso) => {
	try {
		const queryString = format(
			`DELETE FROM horarios_disponibles WHERE id_medico=%s;
			INSERT INTO horarios_disponibles
			  (id_medico, dia_semana, hora_inicio, hora_fin) VALUES %L;
			SELECT * FROM horarios_disponibles WHERE id_medico=%s;`,
			id_medico,
			horariosDisponiblesToInsert(id_medico, dias_disponibles,
				horario_inicio_jornada, horario_fin_jornada,
				minutos_sesion, minutos_descanso),
			id_medico
		);

    const res = await pool.query(queryString);
		return res.rows;
  } catch (error) {
    console.log(error);
  }
}

export const getHorariosDisponiblesPorMedico = async (id_medico) => {
	try {
    const query = await pool.query(
			`SELECT * from horarios_disponibles WHERE id_medico=%s RETURNING *`);
		return query.rows; // right?
  } catch (error) {
    console.log(error);
  }
}

// genera lista de objetos de la forma {hora_inicio, hora_fin}
// input:
//   hora de inicio de jornada (string, 'hh:mm'), hora fin de jornada (same),
//   duracion de sesion (en minutos), duracion de descanso (same) 
function generarHorariosDisponibles(
	horario_inicio_jornada, horario_fin_jornada,
	minutos_sesion, minutos_descanso) {
  function timeToDate(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  function dateToTime(date) {
    return date.toTimeString().slice(0, 5);
  }

  let hora = timeToDate(horario_inicio_jornada);
  const hora_cierre = timeToDate(horario_fin_jornada);

  const lista_horarios = [];

  while (hora < hora_cierre) {
    const hora_fin_sesion = new Date(hora.getTime() + minutos_sesion*60*1000);

    if (hora_fin_sesion > hora_cierre) break;

    lista_horarios.push({
      hora_inicio: dateToTime(hora),
      hora_fin: dateToTime(hora_fin_sesion)
    });

    hora = new Date(hora_fin_sesion.getTime() + minutos_descanso*60*1000);
  }

  return lista_horarios;
}

function horariosDisponiblesToInsert(
	id_medico, dias_disponibles,
	horario_inicio_jornada, horario_fin_jornada,
	minutos_sesion, minutos_descanso) {
	return dias_disponibles.map(dia =>
		generarHorariosDisponibles(
				horario_inicio_jornada, horario_fin_jornada,
				minutos_sesion, minutos_descanso)
			.map(h => ({dia, id_medico, ...h})))
			.reduce((t, d) => t.concat(d), [])
			.map(e => [e.id_medico, e.dia, e.hora_inicio, e.hora_fin]);
}
