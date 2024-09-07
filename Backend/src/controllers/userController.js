import {createAdminModel} from '../models/adminModel.js';
import {createDoctorModel} from '../models/doctorModel.js';
import createPatientModel from '../models/patientModel.js';
import {createUserModel, getUserByEmail, getUserByNroDocumento} from '../models/userModel.js';

const createUserController = async (req, res) =>{
  const user = req.body

  try {
    // Verificar si el número de documento ya está registrado en la base de datos
    const findNroDocumento = await getUserByNroDocumento(user.nro_documento)
    // Verificar si el email ya está registrado en la base de datos
    const findEmail = await getUserByEmail(user.email)
    if (findNroDocumento) {
      return res.json({error: "Nro de Documento ya Registrado"})
    } else if (findEmail) {
      return res.json({error:"Email ya registrado"})
    }
    else{
      // Si el número de documento y el email no están registrados, crear el nuevo usuario en la base de datos
      const newUser = await createUserModel(
        user.nro_documento,
        user.nombre,
        user.apellido,
        user.genero,
        user.fecha_nacimiento,
        user.email,
        user.password,
        user.rol,
        user.nacionalidad,
        user.tipo_documento,
        user.telefono
      )
      // Según el rol del usuario (paciente, médico o admin), crear una entrada correspondiente en la tabla adecuada
      switch (newUser.rol) {
        case 'paciente':
          await createPatientModel(
            user.nro_documento,
            user.direccion
          )
          res.json({ message: 'Paciente Creado Correctamente' })
          break;
        case 'medico':
          await createDoctorModel(
            user.nro_documento,
            user.especialidad_id,
            user.numero_registro
          )
          res.json({ message: 'Medico Creado Correctamente' })
          break;
        case 'admin':
          await createAdminModel(
            user.nro_documento
          )
          res.json({ message: 'Admin Creado Correctamente' })
          break;

        default:
          return res.status(400).json({ error: 'Rol no válido.' })

      }
    }
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

export default createUserController