import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const number = getRandomNumber(1, 20);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
