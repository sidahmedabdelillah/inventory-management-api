const init = (sequelize) => {
  const { Famille, Article } = sequelize.models;
  Famille.hasMany(Article);
  Article.belongsTo(Famille);
};

export default init;
