import express from "express";
const router = express.Router();

import { getAllClients, getOneClient, addClient } from "./controller.client.js";

router.get("/", async (req, res, next) => {
  const clients = await getAllClients();
  res.send(clients);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await getOneClient(id);
  res.send(client);
});

router.post("/", async (req, res, next) => {
  const { client } = req.body;
  try {
    const newClient = await addClient(client);
    res.send(newClient);
  } catch (err) {
    next(err);
  }
});

export default router;
