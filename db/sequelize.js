import Sequelize from 'sequelize';

const conectionData = {
  host: 'localhost',
  user: 'root',
  database: 'example',
  password: 'example',
};

const sequelize = new Sequelize(
  conectionData.database,
  conectionData.user,
  conectionData.password,
  {
    host: conectionData.host,
    dialect: 'mysql',
  }
);

// defining tables and models
import { Bon, BonLine, Client, Famille, Article } from './models/index.js';
Bon(sequelize);
BonLine(sequelize);
Client(sequelize);
Famille(sequelize);
Article(sequelize);

// defining associations
import { BonLineAss, BonAss, ArticleAss } from './associations/index.js';
BonLineAss(sequelize);
BonAss(sequelize);
ArticleAss(sequelize);
sequelize.sync({ force: true }).then(() => 1);

export default sequelize;
