import { Router } from 'express'
import validateRegister from '../middlewares/userMiddleware.js'
import createUserController from '../controllers/userController.js'

const router = Router()

router.post('/register', validateRegister, createUserController )



export default router
