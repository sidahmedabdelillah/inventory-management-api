import joi from "joi";

export const bonLineSchema = joi.object({
  articleId: joi.number().required(),
  quantity: joi.number().required(),
  prixUnit: joi.number().required(),
});
