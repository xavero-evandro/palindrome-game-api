/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
  return res.redirect('/api-docs');
};
