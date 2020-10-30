import runGame from '../index.js';
import getRandom from '../utils.js';

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const number = getRandom(1, 10);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
