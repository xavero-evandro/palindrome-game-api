import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import errorHandler from './errors/errorHandler';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use(errorHandler);

export default app;
