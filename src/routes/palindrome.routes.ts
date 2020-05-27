import { Router } from 'express';
import { getScores, submitEntry } from '../controllers/palindrome';

const palindromeRouter = Router();

/**
 * @swagger
 *
 * /api/getScores:
 *    get:
 *     description: Get Top 5 Scores
 *     tags:
 *       - Palindrome
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Should return the Top 5 Scores in JSON Format
 *       400:
 *         description: Bad parameters
 *       500:
 *         description: Generic error
 */
palindromeRouter.get('/getScores', getScores);

/**
 * @swagger
 *
 * /api/submitEntry:
 *    post:
 *     description: Submit a entry for the Palindrome Game with a Name and a Word
 *     tags:
 *       - Palindrome
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - word
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Evandro'
 *               word:
 *                 type: string
 *                 example: 'bob'
 *     responses:
 *       200:
 *         description: Should return a message with how many point you got if the word is Palindrome
 *       400:
 *         description: Bad parameters
 *       500:
 *         description: Generic error
 */
palindromeRouter.post('/submitEntry', submitEntry);

export default palindromeRouter;
