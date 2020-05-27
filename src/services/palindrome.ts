/* eslint-disable import/prefer-default-export */
import { SubmitEntry } from '../types/SubmitEntry';
import { PalindromeScores } from '../types/PalindromeScores';

const scores: PalindromeScores[] = [];

export const resetScores = () => {
  scores.splice(0, scores.length);
};

export const isPalindrome = (word: string) => {
  if (word.length < 3) return false;
  const cleaned = word.replace(/\W/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
};

export const getAllScores = (): PalindromeScores[] => scores;

export const orderTopScores = (allScores: PalindromeScores[]) =>
  allScores.sort((a, b) => b.points - a.points);

export const getTopScores = (): PalindromeScores[] => {
  return orderTopScores(getAllScores()).slice(0, 5);
};

export const addNewScore = (name: string, word: string): number => {
  scores.push({ name, points: word.length });
  return word.length;
};

export const submitWord = ({ name, word }: SubmitEntry): number => {
  if (isPalindrome(word)) return addNewScore(name, word);
  return 0;
};
