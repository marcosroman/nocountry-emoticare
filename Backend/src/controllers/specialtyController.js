import { getAllSpecialtyModel } from '../models/specialtyModel.js'

export const getAllSpecialtyController = async (req,res) =>{
  try {
    const specialties = await getAllSpecialtyModel()
    res.json(specialties)
  } catch (error) {
    console.log(error)
  }
}