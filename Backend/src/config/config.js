import pg from 'pg'
import 'dotenv/config'

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
	ssl: true,
  allowExitOnIdle: true
})
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err)
    process.exit(1)
  } else {
    console.log('🔋 Database on 🔋')
  }
})

export default pool
