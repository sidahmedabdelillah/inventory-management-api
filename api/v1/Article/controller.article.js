const { Sequelize, DataTypes } = require("sequelize");
const Article = require("./model.article");

const addArticle = async (article) => {
  const created = await Article.create(article);
  return created;
};

module.exports = {
  addArticle,
};
