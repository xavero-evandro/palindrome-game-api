/* eslint-disable import/prefer-default-export */
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const { PORT } = process.env;
