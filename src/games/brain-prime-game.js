import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  const iter = (acc) => {
    if (number === acc) {
      return true;
    }
    if (number % acc === 0 || number === 1) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const getData = () => {
  const number = getRandomNumber(1, 20);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
