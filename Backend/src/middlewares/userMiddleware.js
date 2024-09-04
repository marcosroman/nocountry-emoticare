import Joi from 'joi'

const schemaRegister = Joi.object({
  nro_documento: Joi.number()
    .integer()
    .max(999999999)
    .required()
    .messages({
      'number.base': 'El campo nro_documento debe ser un número.',
      'number.integer': 'El campo nro_documento debe ser un número entero.',
      'number.max': 'El campo nro_documento no puede tener más de 9 dígitos.',
      'any.required': 'El campo nro_documento es obligatorio.'
    }),

  nombre: Joi.string()
    .required()
    .messages({
      'string.base': 'El campo nombre debe ser una cadena de texto.',
      'any.required': 'El campo nombre es obligatorio.'
    }),

  apellido: Joi.string()
    .required()
    .messages({
      'string.base': 'El campo apellido debe ser una cadena de texto.',
      'any.required': 'El campo apellido es obligatorio.'
    }),

  genero: Joi.string()
  .valid('Masculino','Femenino')
  .required()
    .messages({
      'any.required': 'El campo fecha_nacimiento es obligatorio.'
    }),

  fecha_nacimiento: Joi.date()
    .required()
    .messages({
      'date.base': 'El campo fecha_nacimiento debe ser una fecha válida.',
      'any.required': 'El campo fecha_nacimiento es obligatorio.'
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.base': 'El campo email debe ser una cadena de texto.',
      'string.email': 'El campo email debe ser una dirección de correo electrónico válida.',
      'any.required': 'El campo email es obligatorio.'
    }),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
    .messages({
      'string.base': 'El campo password debe ser una cadena de texto.',
      'string.pattern.base': 'El campo password debe tener entre 3 y 30 caracteres alfanuméricos.',
      'any.required': 'El campo password es obligatorio.'
    }),

  repeat_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.base': 'El campo repeat_password debe ser una cadena de texto.',
      'any.only': 'Las contraseñas no coinciden.',
      'any.required': 'El campo repeat_password es obligatorio.'
    }),

  rol: Joi.string()
    .valid('paciente', 'admin', 'medico')
    .required()
    .messages({
      'string.base': 'El campo rol debe ser una cadena de texto.',
      'string.valid': 'El campo rol debe ser uno de los siguientes valores: paciente, admin, medico.',
      'any.required': 'El campo rol es obligatorio.'
    }),

  nacionalidad: Joi.string()
    .required()
    .messages({
      'string.base': 'El campo nacionalidad debe ser una cadena de texto.',
      'any.required': 'El campo nacionalidad es obligatorio.'
    }),

  tipo_documento: Joi.string()
    .required()
    .messages({
      'string.base': 'El campo tipo_documento debe ser una cadena de texto.',
      'any.required': 'El campo tipo_documento es obligatorio.'
    }),

  telefono: Joi.string()
    .max(12)
    .required()
    .messages({
      'string.base': 'El campo telefono debe ser una cadena de texto.',
      'string.max': 'El campo telefono no puede tener más de 12 caracteres.',
      'any.required': 'El campo telefono es obligatorio.'
    }),

  especialidad_id: Joi.number().when('rol', { is: 'medico', then: Joi.required(), otherwise: Joi.forbidden() }).messages({
    'number.base': 'El campo especialidad_id debe ser un número.',
    'any.required': 'El campo especialidad_id es obligatorio para médicos.'
  }),

  numero_registro: Joi.number().when('rol', { is: 'medico', then: Joi.required(), otherwise: Joi.forbidden() }).messages({
    'number.base': 'El campo numero_registro debe ser un número.',
    'any.required': 'El campo numero_registro es obligatorio para médicos.'
  }),

  direccion: Joi.string().when('rol', { is: 'paciente', then: Joi.required(), otherwise: Joi.forbidden() }).messages({
    'string.base': 'El campo direccion debe ser una cadena de texto.',
    'any.required': 'El campo direccion es obligatorio.'
  })

})
  .with('password', 'repeat_password');



const validateRegister = async (req, res, next) => {
  try {
    const { error } = schemaRegister.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    next()
  } catch (error) {

  }
}

export default validateRegister