import _ from 'lodash';
import { game } from '../index.js';

const getProgression = (length = 10) => {
  const step = _.random(1, 10);
  const start = _.random(1, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }

  return progression;
};

const getQuestion = () => {
  const progression = getProgression();
  const indexOfAnswer = _.random(0, 9);
  return {
    task: 'What number is missing in the progression?',
    question: `${progression.slice(0, indexOfAnswer).join(', ')}, .., ${progression.slice(indexOfAnswer + 1).join(', ')}`,
    correctAnswer: String(progression[indexOfAnswer]),
  };
};

const gameProgression = () => game(getQuestion, { attemptsToWin: 3, exitWhenLoosing: true });

export default gameProgression;
