import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games');
  const qUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${qUserName}`);

  return qUserName;
};

const round = (task, question) => {
  console.log(task);
  console.log(`Question: ${question}`);
  const qAnswer = readlineSync.question('Your answer: ');

  return qAnswer;
};

const game = (getQuestion, options = { attemptsToWin: 3, exitWhenLoosing: true }) => {
  let winsCount = 0;
  let gameOver = false;
  const userName = greeting();

  while ((winsCount < options.attemptsToWin) && !gameOver) {
    const { task, question, correctAnswer } = getQuestion();
    const answer = round(task, question);

    if (answer === correctAnswer) {
      console.log('Correct!');
      winsCount += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      gameOver = options.exitWhenLoosing;
    }
  }

  if (!gameOver) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { greeting, game };
