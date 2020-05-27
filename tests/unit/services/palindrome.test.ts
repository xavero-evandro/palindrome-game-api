/* eslint-disable no-undef */
import {
  submitWord,
  addNewScore,
  isPalindrome,
  getAllScores,
  getTopScores,
  resetScores,
  orderTopScores,
} from '../../../src/services/palindrome';

afterEach(() => {
  resetScores();
});

describe('Testing submit a new word', () => {
  it('should return the points if the word is Palindrome', () => {
    const result = submitWord({ name: 'Evandro', word: 'bob' });
    expect(result).toBe(3);
  });

  it('should return 0 points if the word is not Palindrome', () => {
    const result = submitWord({ name: 'Evandro', word: 'dog' });
    expect(result).toBe(0);
  });
});

describe('Testing add a new Score', () => {
  it('should return the length(points) of this word', () => {
    const result = addNewScore('Evandro', 'ordinary');
    expect(result).toBe(8);
  });

  it('should return the length(0) for a invalid word', () => {
    const result = addNewScore('Evandro', '');
    expect(result).toBe(0);
  });
});

describe('Testing get all Scores', () => {
  beforeEach(() => {
    addNewScore('Evandro', 'bob');
    addNewScore('Xavero', 'bobbob');
    addNewScore('Carolina', 'a man a plan a canal panama');
    addNewScore('Evandro', 'a man a plan a canal panama');
    addNewScore('Xavero', 'a man a plan a canal panama');
    addNewScore('Jose', 'bob');
  });
  it('should return all scores', () => {
    const mockResult = [
      { name: 'Evandro', points: 3 },
      { name: 'Xavero', points: 6 },
      { name: 'Carolina', points: 27 },
      { name: 'Evandro', points: 27 },
      { name: 'Xavero', points: 27 },
      { name: 'Jose', points: 3 },
    ];
    const result = getAllScores();
    expect(result).toStrictEqual(mockResult);
  });

  it('should return all scores sorted by points', () => {
    const mockResult = [
      { name: 'Carolina', points: 27 },
      { name: 'Evandro', points: 27 },
      { name: 'Xavero', points: 27 },
      { name: 'Xavero', points: 6 },
      { name: 'Evandro', points: 3 },
      { name: 'Jose', points: 3 },
    ];
    const result = orderTopScores(getAllScores());
    expect(result).toStrictEqual(mockResult);
  });

  it('should return Top 5 scores', () => {
    const mockResult = [
      { name: 'Carolina', points: 27 },
      { name: 'Evandro', points: 27 },
      { name: 'Xavero', points: 27 },
      { name: 'Xavero', points: 6 },
      { name: 'Evandro', points: 3 },
    ];
    const result = getTopScores();
    expect(result).toStrictEqual(mockResult);
  });
});

describe('Testing get all Scores', () => {
  it('should true if the word is Palindrome ', () => {
    const result = isPalindrome('bob');
    expect(result).toBe(true);
  });
  it('should false if the word is not Palindrome ', () => {
    const result = isPalindrome('car');
    expect(result).toBe(false);
  });
  it('should return 0 if the word length is not bigger than 2 letter', () => {
    const result = isPalindrome('do');
    expect(result).toBe(false);
  });
});
