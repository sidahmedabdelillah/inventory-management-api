import joi from "joi";

export const bonSchema = joi.object({
  date: {
    type: joi.date(),
  },
  client: {
    type: joi.number(),
  },
  tottal: {
    type: joi.number,
  },
  bonLine: {
    type: joi.array(),
  },
});
