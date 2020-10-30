import runGame from '../index.js';
import getRandom from '../utils.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number, acc = 2) => {
  if (acc === number) {
    return 'yes';
  }
  if (number % acc === 0) {
    return 'no';
  }
  return isPrime(number, acc + 1);
};

const getData = () => {
  const number = getRandom(3, 20);
  const question = number.toString();
  // console.log(question);
  const answer = isPrime(number);
  // console.log(answer);
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
