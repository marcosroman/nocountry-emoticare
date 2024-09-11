import { Router } from 'express'

const router = Router()

router.get('/patient', (req, res) => {
  if (req.isAuthenticated() && req.user.rol === 'paciente') {
    res.status(200).send({message: "Autorizado"})
  } else {
    res.status(401).send({ error: "No autorizado" })
  }
})

export default router