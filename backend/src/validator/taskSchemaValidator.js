import Joi from "joi";

const taskSchemaValidator = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    completed: Joi.boolean().required()
});

export default taskSchemaValidator;
