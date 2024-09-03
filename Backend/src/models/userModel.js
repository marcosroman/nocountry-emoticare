import pool from '../config/config.js'

export const createUserModel = async (nro_documento, nombre, apellido, fecha_nacimiento, email, password, rol, nacionalidad, tipo_documento, telefono) =>{
  try{
    const query = await pool.query(`INSERT INTO usuarios (nro_documento, nombre, apellido, fecha_nacimiento, email, password, rol, nacionalidad, tipo_documento, telefono, creadaEl, actualizadaEl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'))RETURNING *`,
      [nro_documento, nombre, apellido, fecha_nacimiento, email, password, rol, nacionalidad, tipo_documento, telefono]
    )
    return query.rows[0]
  }catch(error){
    console.log(error)
  }
}

export const getUserByNroDocumento = async(nro_documento) => {
  try {
    const query = await pool.query('SELECT * FROM usuarios WHERE nro_documento= $1',
      [nro_documento]
    )
    return query.rows[0]
  } catch (error) {
    console.log(error)
  }
}

export const getUserByEmail = async(email) => {
  try {
    const query = await pool.query('SELECT * FROM usuarios WHERE email= $1',
      [email]
    )
    return query.rows[0]
  } catch (error) {
    console.log(error)
  }
}

