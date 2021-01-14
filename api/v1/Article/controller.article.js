import sequelize from '../../../db/sequelize.js';

import { articleSchema } from './validoator.article.js';

const { Article, Famille } = sequelize.models;

export const getAllArticles = async () => {
  const articles = await Article.findAll({ include: Famille });
  return articles;
};

export const getOneArticle = async (id) => {
  const article = await Article.findByPk(id);
  return article;
};

export const createArticle = async (article) => {
  await articleSchema.validateAsync(article);
  const created = await Article.create(article);
  return article;
};
