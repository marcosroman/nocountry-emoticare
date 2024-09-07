import Joi from 'joi'

const schemaLogin = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.base': 'El email debe ser una dirección de correo electrónico válida.',
      'string.email': 'El email debe ser una dirección de correo electrónico válida.',
      'any.required': 'El email es obligatorio.'
    }),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
    .messages({
      'any.required': 'El campo password es obligatorio.'
    })
})

const validateLogin = async (req, res, next) =>{
  try {
    const { error } = schemaLogin.validate(req.body);

    if (error) {
      return res.status(200).json({ error: error.details[0].message })
    }

    next()
  } catch (error) {
    console.log(error)
  }
}

export default validateLogin