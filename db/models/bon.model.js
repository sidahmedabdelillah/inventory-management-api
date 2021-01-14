import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;

const init = (sequelize) => {
  const Bon = sequelize.define(
    'Bon',
    {
      date: {
        type: DataTypes.DATE,
      },
      tottal: {
        type: DataTypes.DECIMAL(8, 2),
      },
    },
    {
      hooks: {
        afterCreate: async (bon, options) => {
          const tot = bon.BonLines.map((acc) => acc.tottal);
          const sum = tot.reduce((acc, i) => acc + i, 0);
          bon.tottal = sum;
          await bon.save();
        },
      },
    }
  );
};

export default init;
