const init = (sequelize) => {
  const { Bon, BonLine, Article } = sequelize.models;
  Bon.hasMany(BonLine);
  BonLine.belongsTo(Bon);
  Article.hasMany(BonLine);
  BonLine.belongsTo(Article);
};

export default init;
