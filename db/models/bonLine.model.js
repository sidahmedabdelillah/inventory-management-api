import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const { Article } = sequelize.models;
  const BonLine = sequelize.define(
    'BonLine',
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
      prixUnit: {
        type: DataTypes.DECIMAL,
      },
      tottal: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      hooks: {
        beforeCreate: async (bonline, option) => {
          const { Article } = sequelize.models;
          const article = await Article.findByPk(bonline.ArticleId);
          if (article.quantity >= bonline.quantity) {
            article.quantity -= bonline.quantity;
            await article.save();
            bonline.tottal = bonline.prixUnit * bonline.quantity;
          } else {
            // TODO format error
            throw 'not enough in stock';
          }
        },
        afterDestroy: async (bonline, options) => {
          const { Article } = sequelize.models;
          const article = await Article.findByPk(bonline.ArticleId);
          article.quantity += bonline.quantity;
          await article.save();
        },
      },
    }
  );
};
export default init;
