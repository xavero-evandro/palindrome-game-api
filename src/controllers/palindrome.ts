/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { submitWord, getTopScores } from '../services/palindrome';
import { PalindromeScores } from '../types/PalindromeScores';
import AppError from '../errors/AppError';

export const getScores = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<PalindromeScores>> => {
  const result = getTopScores();
  return res.json(result);
};

export const submitEntry = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any>> => {
  const { name, word } = req.body;
  if (!name || !word) throw new AppError('Name or Word Missing', 400);
  const points = submitWord({ name, word });
  return res.json({ points });
};
