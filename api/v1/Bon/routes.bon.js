import exporess from "express";
const router = exporess.Router();

import { getAllBons, getBonById, createBon } from "./controller.bon.js";

router.get("/", async (req, res, next) => {
  const bons = await getAllBons();
  res.send(bons);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const bon = await getBonById(id);
  res.send(bon);
});

router.post("/", async (req, res, next) => {
  const { bon } = req.body;
  const created = await createBon(bon);
  res.send(created);
});

export default router;
