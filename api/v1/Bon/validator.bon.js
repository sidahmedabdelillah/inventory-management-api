import joi from "joi";

import { bonLineSchema } from "./BonLine/validator.bonLine.js";

export const bonSchema = joi.object({
  date: {
    type: joi.string(),
  },
  client: {
    type: joi.number(),
  },
  bonLine: [bonLineSchema],
});
