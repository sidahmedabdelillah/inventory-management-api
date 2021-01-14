import joi from 'joi';

export const familleSchema = joi.object({
  label: joi.string().required(),
});
