import _ from 'lodash';
import { game } from '../index.js';

const allowedOperations = [
  { literal: '+', f: (x, y) => x + y },
  { literal: '-', f: (x, y) => x - y },
  { literal: '*', f: (x, y) => x * y },
];

const getQuestion = () => {
  const operation = allowedOperations[_.random(0, allowedOperations.length - 1)];
  const x = _.random(0, 100);
  const y = _.random(0, 100);
  return {
    task: 'What is the result of the expression?',
    question: `${x} ${operation.literal} ${y}`,
    correctAnswer: String(operation.f(x, y)),
  };
};

const gameCalc = () => game(getQuestion, { attemptsToWin: 3, exitWhenLoosing: true });

export default gameCalc;
