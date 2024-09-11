import Joi from 'joi';

const paramsStartConsulta = Joi.object({
	id_agendamiento: Joi.number().required()
		.messages({
			'any.required': 'El campo id_agendamiento es obligatorio.'}),
	fechahora_inicio: Joi.string().isoDate().required()
		.messages({
			'string.isoDate': 'El formato de fecha debe ser string isoDate'})
});

const paramsEndConsulta = Joi.object({
	id_agendamiento: Joi.number().required()
		.messages({
			'any.required': 'El campo id_agendamiento es obligatorio.'}),
	fechahora_fin: Joi.string().isoDate().required()
		.messages({
			'string.isoDate': 'El formato de fecha debe ser string isoDate'})
});

export const validateStartConsulta = async (req, res, next) => {
  try {
    const { error } = paramsStartConsulta.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({error});
  }
}

export const validateEndConsulta = async (req, res, next) => {
  try {
    const { error } = paramsEndConsulta.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({error});
  }
}



