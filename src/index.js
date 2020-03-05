import readlineSync from 'readline-sync';
import _ from 'lodash';

const greeting = () => {
  console.log('Welcome to the Brain Games');
  const qUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${qUserName}`);

  return qUserName;
};

const gameEven = () => {
  const isEven = (number) => number % 2 === 0;
  const isCorrect = (correctAnswer, userAnswer) => userAnswer === correctAnswer;
  const getCorrectAnswer = (number) => isEven(number) ? 'yes' : 'no';
  const qUserName = greeting();

  let winsCount = 0;
  while (winsCount < 3) {
    const question = _.random(0, 100);
    const correctAnswer = getCorrectAnswer(question);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);

    const qAnswer = readlineSync.question('Your answer: ');

    if (isCorrect(qAnswer, correctAnswer)) {
      winsCount += 1;
      console.log('Correct!');
    } else {
      winsCount = 0;
      console.log(`"${qAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${qUserName}`);
    }
  }

  console.log(`Congratulations, ${qUserName}!`);
};

export { greeting, gameEven };
