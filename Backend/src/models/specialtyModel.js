import pool from '../config/config.js'

export const getAllSpecialtyModel = async () =>{
  try {
    const query = await pool.query('SELECT * FROM especialidades')
    console.log(query.rows)
    return query.rows
  } catch (error) {
    console.error('Error al obtener especialidades:', error);
  }
}