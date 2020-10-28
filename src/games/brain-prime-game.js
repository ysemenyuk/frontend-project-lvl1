import runGame from '../index.js';

const getRandom = (minn, maxx) => {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getData = () => {
  const num = getRandom(3, 20);
  const question = num;
  // console.log(question);

  const iter = (acc) => {
    if (acc === num) {
      return 'yes';
    }
    if (num % acc === 0) {
      return 'no';
    }
    return iter(acc + 1);
  };

  const answer = iter(2);
  // console.log(answer);

  return { question, answer };
};

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const startGame = () => runGame(gameTitle, getData);

export default startGame;
