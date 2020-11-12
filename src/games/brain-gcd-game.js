import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2) => {
  let divisor = 1;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const getData = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const answer = findGreatestCommonDivisor(num1, num2).toString();
  return { question, answer };
};

export default () => runGame(gameTitle, getData);
