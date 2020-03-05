import readlineSync from 'readline-sync';

const greeting = () => {
  const qUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${qUserName}`);
};

export default greeting;
