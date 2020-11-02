import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2, acc = 1, divisor = 1) => {
  let newDivisor = divisor;
  const newAcc = acc + 1;
  if (num1 % acc === 0 && num2 % acc === 0) {
    newDivisor = acc;
  }
  if (acc === num1 || acc === num2) {
    return newDivisor;
  }
  return findGreatestCommonDivisor(num1, num2, newAcc, newDivisor);
};

const getData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const answer = findGreatestCommonDivisor(num1, num2).toString();
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
