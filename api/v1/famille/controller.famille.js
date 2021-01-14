import sequelize from "../../../db/sequelize.js";

import { familleSchema } from "./validator.famille.js";

const { Famille } = sequelize.models;

export const getAllFamilles = async () => {
  const familles = await Famille.findAll();
  return familles;
};

export const getOneFamille = async (id) => {
  const famille = await Famille.findByPk(id);
  return famille;
};

export const createFamille = async (famille) => {
  await familleSchema.validateAsync(famille);
  const created = await Famille.create(famille);
  return created;
};
