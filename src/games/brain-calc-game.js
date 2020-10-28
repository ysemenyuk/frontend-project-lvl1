import runGame from '../index.js';
import { getRandom } from '../utils.js';

// const getRandom = (minn, maxx) => {
//   const min = Math.ceil(minn);
//   const max = Math.floor(maxx);
//   return Math.floor(Math.random() * (max - min)) + min;
// };
// const getRandomMathSign = () => {
//   const mathSigns = ['+', '-', '*', '/'];
//   const index = getRandom(0, 3);
//   return mathSigns[index];
// };

// const getData = () => {
//   const number1 = getRandom(1, 10);
//   const number2 = getRandom(1, 10);
//   const mathSign = getRandomMathSign();
//   const question = `${number1} ${mathSign} ${number2}`;
//   console.log(question);
//   let answer = '';
//   if (mathSign === '+') {
//     answer = (number1 + number2).toString();
//   } else if (mathSign === '-') {
//     answer = (number1 - number2).toString();
//   } else if (mathSign === '*') {
//     answer = (number1 * number2).toString();
//   } else if (mathSign === '/') {
//     answer = (number1 / number2).toString();
//   }
//   return { question, answer };
// };

const getData = () => {
  const number1 = getRandom(1, 10);
  const number2 = getRandom(1, 10);
  const randomIndex = getRandom(1, 4);
  // console.log(number1, number2, randomIndexMathSign);
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

const gameTitle = 'What is the result of the expression?';
const startGame = () => runGame(gameTitle, getData);

export default startGame;
