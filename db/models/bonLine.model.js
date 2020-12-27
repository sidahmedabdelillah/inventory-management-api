import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const BonLine = sequelize.define(
    "BonLine",
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
        beforeCreate: (bonline, option) => {
          console.log("in hook");
          console.log(bonline);
        },
      },
    }
  );
};
export default init;
