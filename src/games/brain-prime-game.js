import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number, acc = 2) => {
  if (number === 1 || number % acc === 0) {
    return false;
  }
  if (number === acc) {
    return true;
  }
  return isPrime(number, acc + 1);
};

const getData = () => {
  const number = getRandomNumber(1, 20);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
