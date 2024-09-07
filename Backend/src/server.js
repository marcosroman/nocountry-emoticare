import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import configureRoutes from './routes/index.js'

const app = express();
app.use(express.json());
app.use(cors());
configureRoutes(app)
app.listen(process.env.PORT,console.log(`Corriendo en http://localhost:${process.env.DB_PORT}`));
