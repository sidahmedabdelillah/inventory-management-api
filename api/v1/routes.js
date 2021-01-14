import express from "express";
const router = express.Router();

import {
  bonRouter,
  clientRouter,
  articleRouter,
  familleRouter,
} from "./index.js";

router.get("/", (req, res) => {
  res.send("hello");
});

router.use("/bon", bonRouter);
router.use("/client", clientRouter);
router.use("/article", articleRouter);
router.use("/famille", familleRouter);

export default router;
