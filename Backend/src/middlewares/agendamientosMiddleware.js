import Joi from 'joi';

const paramsGetAgendamiento = Joi.object({
	id_agendamiento: Joi.number().required()
		.messages({
			'any.required': 'El campo id_agendamiento es obligatorio.'})
});

const paramsGetAgendamientosDisponibles  = Joi.object({
	id_medico: Joi.number().required()
		.messages({
			'any.required': 'El campo id_medico es obligatorio.'}),
	fechahora_inicio: Joi.string().isoDate().required()
		.messages({
			'string.isoDate': 'El formato de fecha debe ser string isoDate'}),
	fechahora_fin: Joi.string().isoDate().required()
		.messages({
			'string.isoDate': 'El formato de fecha debe ser string isoDate'})
});

const paramsAgendar = Joi.object({
	id_medico: Joi.number().required()
		.messages({
			'any.required': 'El campo id_medico es obligatorio.'}),
	id_paciente: Joi.number().required()
		.messages({
			'any.required': 'El campo id_paciente es obligatorio.'}),
	fechahora_inicio: Joi.string().isoDate().required()
		.messages({
			'string.isoDate': 'El formato de fecha debe ser string isoDate'}),
	fechahora_fin: Joi.string().isoDate().required()
		.messages({
			'string.isoDate': 'El formato de fecha debe ser string isoDate'})
});

const paramsUpdateAgendamientoState = Joi.object({
	id_agendamiento: Joi.number().required()
		.messages({
			'any.required': 'El campo id_agendamiento es obligatorio.'}),
	estado: Joi.string().required()
		.valid('RESERVADO', 'INICIADO', 'FINALIZADO', 'CANCELADO')
		.messages({
			'string.base': 'Value must be a string.',
			'any.only': 'Los valores permitidos son: RESERVADO, INICIADO, FINALIZADO, CANCELADO',
			'any.required': 'Value is required.'})
});

export const validateGetAgendamiento = async (req, res, next) => {
  try {
    const { error } = paramsGetAgendamiento.validate(req.body);

    if (error) {
      return res.status(200).json({ error: error.details[0].message })
    }

    next()
  } catch (error) {

  }
}

export const validateGetAgendamientosDisponibles = async (req, res, next) => {
  try {
    const { error } = paramsGetTurnosDisponibles.validate(req.body);

    if (error) {
      return res.status(200).json({ error: error.details[0].message })
    }

    next()
  } catch (error) {

  }
}

export const validateAgendar = async (req, res, next) => {
  try {
    const { error } = paramsAgendar.validate(req.body);

    if (error) {
      return res.status(200).json({ error: error.details[0].message })
    }

    next()
  } catch (error) {

  }
}

export const validateUpdateAgendamientoState = async (req, res, next) => {
  try {
    const { error } = paramsUpdateAgendamientoState.validate(req.body);

    if (error) {
      return res.status(200).json({ error: error.details[0].message })
    }

    next()
  } catch (error) {

  }
}
