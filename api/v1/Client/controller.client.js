import sequelize from "../../../db/sequelize.js";

import { clientSchema } from "./validator.client.js";

const { Client } = sequelize.models;

export const getAllClients = async () => {
  const clients = await Client.findAll();
  return clients;
};

export const getOneClient = async (id) => {
  const client = await Client.findByPk(id);
  console.log(client);
  return client;
};

export const addClient = async (client) => {
  await clientSchema.validateAsync(client);
  const newClient = await Client.create(client);
  return newClient;
};
