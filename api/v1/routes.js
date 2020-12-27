import express from "express";
const router = express.Router();

import { bonRouter, clientRouter } from "./index.js";

router.get("/", (req, res) => {
  res.send("hello");
});

router.use("/bon", bonRouter);
router.use("/client", clientRouter);

export default router;
