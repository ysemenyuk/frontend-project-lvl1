import runGame from '../index.js';

const getRandom = (minn, maxx) => {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getData = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const question = `${num1} ${num2}`;
  // console.log(question);

  const iter = (acc, divisor) => {
    let newDivisor = divisor;
    if (num1 % acc === 0 && num2 % acc === 0) {
      newDivisor = acc;
    }
    if (acc === num1 || acc === num2) {
      // console.log(divisor);
      return newDivisor;
    }
    return iter(acc + 1, newDivisor);
  };

  const answer = iter(1, 1).toString();
  // console.log(answer);

  return { question, answer };
};

const gameTitle = 'Find the greatest common divisor of given numbers.';
const startGame = () => runGame(gameTitle, getData);

export default startGame;
