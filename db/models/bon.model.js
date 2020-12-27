import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const Bon = sequelize.define("Bon", {
    date: {
      type: DataTypes.DATE,
    },
    tottal: {
      type: DataTypes.DECIMAL(8, 2),
    },
  });
};

export default init;
