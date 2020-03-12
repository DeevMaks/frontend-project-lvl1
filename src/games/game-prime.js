import _ from 'lodash';
import { game } from '../index.js';

const primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
  53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const getQuestion = () => {
  const question = _.random(1, 100);
  return {
    task: 'Answer "yes" if given number is prime. Otherwise answer "no"',
    question,
    correctAnswer: primeList.includes(question) ? 'yes' : 'no',
  };
};

const gamePrime = () => game(getQuestion, { attemptsToWin: 3, exitWhenLoosing: true });

export default gamePrime;
