import express from "express";
const router = express.Router();

import {
  getAllArticles,
  getOneArticle,
  createArticle,
} from "./controller.article.js";

router.get("/", async (req, res, next) => {
  try {
    const articles = await getAllArticles();
    res.send(articles);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await getOneArticle(id);
    res.send(article);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { article } = req.body;
  try {
    const created = await createArticle(article);
    res.send(created);
  } catch (error) {
    next(error);
  }
});

export default router;
