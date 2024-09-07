import { Router } from 'express'

const router = Router()

router.get('/patient', (req, res) => {
  if (req.isAuthenticated() && req.user.rol === 'paciente') {
    res.send('hola ' + req.user.nombre)
  } else {
    res.status(401).send({ msg: "no autorizado" })
  }
})

export default router