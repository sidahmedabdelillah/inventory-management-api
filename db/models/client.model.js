import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const Client = sequelize.define("Client", {
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default init;
