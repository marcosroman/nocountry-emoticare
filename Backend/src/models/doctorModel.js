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

export default createDoctorModel
