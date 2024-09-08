import { Router } from 'express'

const router = Router()

router.get('/doctor', (req, res) => {
  if (req.isAuthenticated() && req.user.rol === 'medico') {
    res.send('hola ' + req.user.nombre)
  } else {
    res.status(401).send({ msg: "no autorizado" })
  }
  console.log(req.session)
  console.log(req.user)
})

export default router