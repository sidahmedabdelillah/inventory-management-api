import sequelize from '../../../db/sequelize.js';

import { bonSchema } from './validator.bon.js';

const { Bon, BonLine } = sequelize.models;

Bon.BonLine = Bon.hasMany(BonLine);

export const getAllBons = async () => {
  const bons = await Bon.findAll();
  return bons;
};

export const getBonById = async (id) => {
  const bon = await Bon.findByPk(id);
  return bon;
};

export const createBon = async (bon) => {
  //await bonSchema.validateAsync(bon);

  const created = await Bon.create(bon, {
    include: BonLine,
  });
  return created;
};

export const updateBon = async (id, bon) => {
  //await bonSchema.validateAsync(bon);
  const udated = Bon.update(bon, {
    where: {
      id: id,
    },
  });
};
