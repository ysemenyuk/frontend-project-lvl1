import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGCD(num2, num1 % num2);
};

const getData = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const answer = findGCD(num1, num2).toString();
  return { question, answer };
};

export default () => runGame(gameTitle, getData);
