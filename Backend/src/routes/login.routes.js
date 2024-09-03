import { Router } from 'express'

const router = Router()

router.get('/login',(req,res)=>{
  res.json({message:'Prueba Login'})
})

export default router