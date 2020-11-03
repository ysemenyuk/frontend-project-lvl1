import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'What number is missing in the progression?';

const getQuestionArray = (first, length, missing) => {
  const iter = (array, acc) => {
    if (acc === length) {
      return array;
    }
    if (acc === missing) {
      array.push('..');
    } else {
      array.push(first + acc);
    }
    return iter(array, acc + 1);
  };
  return iter([], 0);
};

const getData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const arrayLength = getRandomNumber(6, 9);
  const missingNumber = getRandomNumber(0, arrayLength - 1);
  const question = getQuestionArray(firstNumber, arrayLength, missingNumber).join(' ');
  const answer = (firstNumber + missingNumber).toString();
  return { question, answer };
};

const startGame = () => runGame(gameTitle, getData);

export default startGame;
