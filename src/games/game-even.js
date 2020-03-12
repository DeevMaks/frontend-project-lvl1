import _ from 'lodash';
import { game } from '../index.js';

const getQuestion = () => {
  const isEven = (number) => number % 2 === 0;
  const question = _.random(0, 100);
  return {
    task: 'Answer "yes" if the number is even, otherwise answer "no".',
    question,
    correctAnswer: isEven(question) ? 'yes' : 'no',
  };
};

const gameEven = () => game(getQuestion, { attemptsToWin: 3, exitWhenLoosing: false });

export default gameEven;
