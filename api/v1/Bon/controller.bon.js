import sequelize from "../../../db/sequelize.js";

import { bonSchema } from "./validator.bon.js";

const { Bon } = sequelize.models;

export const getAllBons = async () => {
  const bons = await Bon.findAll();
  return bons;
};

export const getBonById = async (id) => {
  const bon = await Bon.findByPk(id);
  return bon;
};

export const createBon = async (bon) => {
  await bonSchema.validateAsync();
  console.log(await bonSchema.validateAsync());
  return "ok";
};
