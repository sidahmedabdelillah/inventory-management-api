const init = (sequelize) => {
  const { Bon, Client } = sequelize.models;
  Client.hasMany(Client);
  Client.belongsTo(Client);
};

export default init;
