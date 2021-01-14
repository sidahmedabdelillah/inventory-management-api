const init = (sequelize) => {
  const { Bon, Client } = sequelize.models;
  Client.hasMany(Bon);
  Bon.belongsTo(Client);
};

export default init;
