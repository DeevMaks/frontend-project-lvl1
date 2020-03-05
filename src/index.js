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
  const isCorrect = (question, answer) => {
    if (answer !== 'yes' && answer !== 'no') return false;
    return (isEven(question) && answer === 'yes') || (!isEven(question) && answer === 'no');
  };
  const inverse = (val) => ((val === 'yes') ? 'no' : 'yes');
  const qUserName = greeting();

  let winsCount = 0;
  while (winsCount < 3) {
    const question = _.random(0, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);

    const qAnswer = readlineSync.question('Your answer: ');

    if (isCorrect(question, qAnswer)) {
      winsCount += 1;
      console.log('Correct!');
    } else {
      winsCount = 0;
      console.log(`"${qAnswer}" is wrong answer ;(. Correct answer was "${inverse.qAnswer}".`);
      console.log(`Let's try again, ${qUserName}`);
    }
  }

  console.log(`Congratulations, ${qUserName}!`);
};

export { greeting, gameEven };
