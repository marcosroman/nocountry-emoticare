import { Router } from 'express'
import { isAuthenticated } from '../middlewares/authMiddleware.js'
import { isAdmin } from '../middlewares/adminMiddleware.js'
import { getAdminByNroDocumentoController, getAllDoctorController } from '../controllers/adminController.js'
import validateRegister from '../middlewares/userMiddleware.js'
import createUserController from '../controllers/userController.js'
import { getAllSpecialtyController } from '../controllers/specialtyController.js'

const router = Router()

router.get('/admin', isAuthenticated, isAdmin,(req,res)=>{
  res.status(200).send({message: "Autorizado"})
})

router.get('/admin/doctors', isAuthenticated, isAdmin, getAllDoctorController)
router.post('/admin/newdoctor', isAuthenticated, isAdmin, validateRegister, createUserController)
router.get('/admin/doctor/specialty', isAuthenticated, isAdmin, getAllSpecialtyController )
router.get('/admin/profile', isAuthenticated, isAdmin, getAdminByNroDocumentoController)
export default router