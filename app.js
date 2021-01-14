import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import sequelize from './db/sequelize.js';

import { routerV1 } from './api/v1/index.js';

import { notFound, errorHandler } from './midlewares/index.js';

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'hello ducklin',
  });
});
app.use('/api/v1', routerV1);

app.use(errorHandler);
app.use(notFound);

export default app;
