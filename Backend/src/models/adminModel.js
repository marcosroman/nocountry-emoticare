import pool from '../config/config.js'

const createAdminModel = async (nro_documento) =>{
  try {
    const query = await pool.query(`INSERT INTO admins (usuario_id, creadaEl, actualizadaEl) VALUES ($1, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'))RETURNING *`,
      [nro_documento]
    )
    return query.rows[0]
  } catch (error) {
    console.log(error)
  }
}
export default createAdminModel