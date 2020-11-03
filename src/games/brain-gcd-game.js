import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2) => {
  const iter = (acc, divisor) => {
    if (acc === num1 || acc === num2) {
      if (num1 % acc === 0 && num2 % acc === 0) {
        return acc;
      }
      return divisor;
    }
    if (num1 % acc === 0 && num2 % acc === 0) {
      return iter(acc + 1, acc);
    }
    return iter(acc + 1, divisor);
  };
  return iter(1, 1);
};

const getData = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const answer = findGreatestCommonDivisor(num1, num2).toString();
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
