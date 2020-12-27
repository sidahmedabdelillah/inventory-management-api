import express from "express";
const router = express.Router();

import { getAllClients, getOneClient, addClient } from "./controller.client.js";

router.get("/", async (req, res, next) => {
  const clients = await getAllClients();
  res.send(clients);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = getOneClient(id);
  res.send(client);
});

router.post("/", async (req, res, next) => {
  const { client } = req.body;
  try {
    const newClient = await addClient(client);
  } catch (err) {
    next(err);
  }
  res.send(newClient);
});

export default router;
