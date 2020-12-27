const router = require("express").Router();
const Article = require("./model.article");

const { addArticle } = require("./controller.article");

router.get("/", (req, res) => {
  const articles = Article.findAll();
  res.send(articles);
});

router.post("/", async (req, res) => {
  const { article } = req.body;
  const created = await addArticle(article);
  res.send(created);
});

module.exports = router;
