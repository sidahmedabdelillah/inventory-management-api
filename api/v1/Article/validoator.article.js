import joi from 'joi';

export const articleSchema = joi.object({
  label: joi.string().required(),
  quantity: joi.number().required(),
  FamilleId: joi.number(),
});
