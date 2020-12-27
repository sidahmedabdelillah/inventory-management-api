import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const Article = sequelize.define("Article", {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  });
};

export default init;
