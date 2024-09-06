import { getAdminByNroDocumentoModel } from '../models/adminModel.js'
import { getAllDoctorModel } from '../models/doctorModel.js'

export const getAllDoctorController = async (req,res) =>{
  try {
    const doctores = await getAllDoctorModel()
    res.json(doctores)
  } catch (error) {
    console.log(error)
  }
}

export const getAdminByNroDocumentoController = async(req, res) =>{
  try {
    const admin = await getAdminByNroDocumentoModel(req.user.nro_documento)
    res.json(admin)
  } catch (error) {
    console.log(error)
  }
}