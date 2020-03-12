import _ from 'lodash';
import { game } from '../index.js';

const gcd = (x, y) => ((x === 0) ? y : gcd((y % x), x));


const getQuestion = () => {
  const x = _.random(0, 100);
  const y = _.random(0, 100);
  return {
    task: 'Find the greatest common divisor of given numbers.',
    question: `${x} ${y}`,
    correctAnswer: String(gcd(x, y)),
  };
};

const gameGcd = () => game(getQuestion, { attemptsToWin: 3, exitWhenLoosing: true });

export default gameGcd;
