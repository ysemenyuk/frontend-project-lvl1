import runGame from '../index.js';

const getRandom = (minn, maxx) => {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getData = () => {
  const number = getRandom(1, 10);
  const question = number;
  const answer = isEven(number);
  return { question, answer };
};

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no"';
const startGame = () => runGame(gameTitle, getData);

export default startGame;
