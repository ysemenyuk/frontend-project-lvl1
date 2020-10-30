import runGame from '../index.js';
import getRandom from '../utils.js';

const gameTitle = 'What is the result of the expression?';

const getData = () => {
  const number1 = getRandom(1, 10);
  const number2 = getRandom(1, 10);
  const randomIndex = getRandom(1, 4);
  // console.log(number1, number2, randomIndex);
  let question = '';
  let answer = '';
  if (randomIndex === 1) {
    question = `${number1} + ${number2}`;
    answer = (number1 + number2).toString();
  } else if (randomIndex === 2) {
    question = `${number1} - ${number2}`;
    answer = (number1 - number2).toString();
  } else if (randomIndex === 3) {
    question = `${number1} * ${number2}`;
    answer = (number1 * number2).toString();
  } else if (randomIndex === 4) {
    question = `${number1} / ${number2}`;
    answer = (number1 / number2).toString();
  }
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
