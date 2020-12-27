import joi from "joi";

export const clientSchema = joi.object({
  designation: joi.string().required().max(255),
});
