import express from "express";
const router = express.Router();

import {
  getAllFamilles,
  getOneFamille,
  createFamille,
} from "./controller.famille.js";

router.get("/", async (req, res, next) => {
  const familles = await getAllFamilles();
  res.send(familles);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const famille = await getOneFamille(id);
  res.send(famille);
});

router.post("/", async (req, res, next) => {
  const { famille } = req.body;
  try {
    const created = await createFamille(famille);
    res.send(famille);
  } catch (error) {
    next(error);
  }
});

export default router;
