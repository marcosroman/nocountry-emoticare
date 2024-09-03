import pool from '../config/config.js'

const createPatientModel = async (nro_documento, direccion) => {
  try {
    const query = await pool.query(`INSERT INTO pacientes (usuario_id, direccion, creadaEl, actualizadaEl) VALUES ($1, $2, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'))RETURNING *`,
      [nro_documento,direccion]
    )
    return query.rows[0]
  } catch (error) {
    console.log(error)
  }
}
export default createPatientModel