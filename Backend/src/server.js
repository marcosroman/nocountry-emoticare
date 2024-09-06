import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import configureRoutes from './routes/index.js'
import session from 'express-session'
import connectPgSimple from 'connect-pg-simple'
import pool from './config/config.js';
import passport from 'passport';

const pgSession = connectPgSimple(session)
const app = express();
app.use(express.json());
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new pgSession({
    pool: pool,
    tableName:'sesiones_usuarios'

  }),
  cookie: {
    maxAge: 1800000

   }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(cors());
configureRoutes(app)
app.listen(process.env.PORT,console.log(`Corriendo en  http://localhost:${process.env.PORT}`));