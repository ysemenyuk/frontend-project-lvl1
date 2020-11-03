import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'What number is missing in the progression?';

const getQuestionArray = (first, last, missing) => {
  const array = [];
  for (let i = first; i <= last; i += 1) {
    if (i === missing) {
      array.push('..');
    } else {
      array.push(i);
    }
  }
  return array;
};

const getData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const progressionLength = getRandomNumber(6, 8);
  const lastNumber = firstNumber + progressionLength;
  const missingNumber = getRandomNumber(firstNumber, lastNumber);
  console.log(firstNumber, lastNumber, missingNumber);
  const question = getQuestionArray(firstNumber, lastNumber, missingNumber).join(' ');
  console.log(question);
  const answer = (missingNumber).toString();
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
