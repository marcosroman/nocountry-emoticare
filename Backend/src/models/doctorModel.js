import pool from '../config/config.js'

const createDoctorModel = async (nro_documento, especialidad_id, numero_registro) => {
  try {
    const query = await pool.query(`INSERT INTO medicos (usuario_id, especialidad_id, numero_registro, creadaEl, actualizadaEl) VALUES ($1 , $2, $3, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'))RETURNING *`,
      [nro_documento, especialidad_id, numero_registro]
    )
    return query.rows[0]
  } catch (error) {
    console.log(error)
  }

}

export const getDoctorById = async (id_doctor) => {
	try {
		const query = await pool.query(`SELECT * FROM medicos WHERE id=$1;`, [id_doctor]);
		return query.rows[0];
  } catch (error) {
    console.log(error)
  }
}

export const getAllDoctorModel = async() =>{
  try {
    const query = await pool.query(
      `SELECT u.nro_documento, u.nombre, u.apellido, e.nombre AS especialidad
      FROM medicos m
      INNER JOIN usuarios u ON m.usuario_id = u.nro_documento
      INNER JOIN especialidades e ON m.especialidad_id = e.id;`
    );
    return query.rows
  } catch (error) {
    console.log(object)
  }
}


export default createDoctorModel
