import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'What is the result of the expression?';

const getRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  return mathSigns[randomIndex];
};

const calculate = (number1, number2, mathSign) => {
  let result = 0;
  if (mathSign === '+') {
    result = number1 + number2;
  } else if (mathSign === '-') {
    result = number1 - number2;
  } else if (mathSign === '*') {
    result = number1 * number2;
  } else {
    return false;
  }
  return result;
};

const getData = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const mathSign = getRandomMathSign();
  const question = `${number1} ${mathSign} ${number2}`;
  const answer = calculate(number1, number2, mathSign).toString();
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
