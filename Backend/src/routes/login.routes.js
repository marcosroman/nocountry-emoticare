import { Router } from 'express'
import validateLogin from '../middlewares/loginMiddleware.js'
import passport from 'passport';
import '../controllers/loginController.js'
const router = Router()

router.post('/login', validateLogin, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(404).json({ error: info.message });
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.status(200).json({
        message: 'Inicio de sesión exitoso',
        user: user
      })
    });
  })(req, res, next);
});

export default router