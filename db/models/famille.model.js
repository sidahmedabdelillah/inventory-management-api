import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const Famille = sequelize.define("Famille", {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default init;
