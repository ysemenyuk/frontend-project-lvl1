import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'What is the result of the expression?';

const getRandomMathSign = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  return operators[randomIndex];
};

const calculate = (number1, number2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown operator '${operator}'!`);
  }

  return result;
};

const getData = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = getRandomMathSign();
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator).toString();
  return { question, answer };
};

export default () => runGame(gameTitle, getData);
