import runGame from '../index.js';

const getRandom = (minn, maxx) => {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);
  return Math.floor(Math.random() * (max - min)) + min;
};
const getRandomMathSign = () => {
  const mathSigns = ['+', '-', '*', '/'];
  const index = getRandom(0, 3);
  return mathSigns[index];
};

const gameTitle = 'What is the result of the expression?';

const getData = () => {
  const number1 = getRandom(1, 10);
  const number2 = getRandom(1, 10);
  const mathSign = getRandomMathSign();
  const question = `${number1} ${mathSign} ${number2}`;
  let answer = '';
  if (mathSign === '+') {
    answer = (number1 + number2).toString();
  } else if (mathSign === '-') {
    answer = (number1 - number2).toString();
  } else if (mathSign === '*') {
    answer = (number1 * number2).toString();
  } else if (mathSign === '/') {
    answer = (number1 / number2).toString();
  }
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
