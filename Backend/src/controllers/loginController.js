import { getUserByEmail, getUserByNroDocumento } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import passport from 'passport'
import LocalStrategy from 'passport-local'

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async function (email, password, done) {
    try {
      const user = await getUserByEmail(email); // Usar tu función personalizada
      if (!user) {
        return done(null, false, { message: 'Usuario no encontrado' });
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password)
      if (!isPasswordValid) { // Asegúrate de tener esta función o haz la comparación manual
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
      return done(null, user);
    } catch (err) {
      return done(err+"aqui caigo");
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.nro_documento); // Aquí 'user.id' es el identificador del usuario
});

// Deserializar el usuario a partir del ID almacenado en la sesión
passport.deserializeUser(async (nro_documento, done) => {
  try {
    const user = await getUserByNroDocumento(nro_documento); // Asegúrate de tener una función para obtener el usuario por ID
    done(null, user);
  } catch (err) {
    done(err);
  }
});