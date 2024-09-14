import Joi from 'joi';

const paramsGetConsulta = Joi.object({
	id_consulta: Joi.number().required()
		.messages({
			'any.required': 'El campo id_consulta es obligatorio.'})
});

const paramsStartConsulta = Joi.object({
	id_agendamiento: Joi.number().required()
		.messages({
			'any.required': 'El campo id_agendamiento es obligatorio.'})
});

const paramsEndConsulta = Joi.object({
	id_consulta: Joi.number().required()
		.messages({
			'any.required': 'El campo id_consulta es obligatorio.'})
});

const paramsGetNotasConsulta = Joi.object({
	id_consulta: Joi.number().required()
		.messages({
			'any.required': 'El campo id_consulta es obligatorio.'})
});

const paramsPostNotaConsulta = Joi.object({
	id_consulta: Joi.number().required()
		.messages({
			'any.required': 'El campo id_agendamiento es obligatorio.'})
});

const bodyPostNotaConsulta = Joi.object({
	nota: Joi.string().required()
		.messages({
			'any.required': 'El campo nota es obligatorio.'})
});

export const validateGetConsulta = (req, res, next) => {
  try {
    const paramsValidation = paramsGetConsulta.validate(req.params);

    if (paramsValidation.error) {
      return res.status(400).json({
				error: paramsValidation.error.details[0].message
			});
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({ error });
  }
}

export const validateStartConsulta = (req, res, next) => {
  try {
    const paramsValidation = paramsStartConsulta.validate(req.params);

    if (paramsValidation.error) {
      return res.status(400).json({
				error: paramsValidation.error.details[0].message
			});
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({ error });
  }
}

export const validateEndConsulta = (req, res, next) => {
  try {
    const paramsValidation = paramsEndConsulta.validate(req.params);

		if (paramsValidation.error) {
      return res.status(400).json({
				error: paramsValidation.error.details[0].message
			});
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({error});
  }
}

export const validateGetNotasConsulta = (req, res, next) => {
  try {
    const paramsValidation = paramsGetNotasConsulta.validate(req.params);

    if (paramsValidation.error) {
      return res.status(400).json({
				error: paramsValidation.error.details[0].message });
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({ error });
  }
}

export const validatePostNotaConsulta = (req, res, next) => {
  try {
    const paramsValidation = paramsPostNotaConsulta.validate(req.params);
    if (paramsValidation.error) {
      return res.status(400).json({
				error: paramsValidation.error.details[0].message });
    }

    const bodyValidation = bodyPostNotaConsulta.validate(req.body);
    if (bodyValidation.error) {
      return res.status(400).json({
				error: bodyValidation.error.details[0].message });
    }

    next();
  } catch (error) {
		console.error(error);
		return res.status(500).json({ error });
  }
}
