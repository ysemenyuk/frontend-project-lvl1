import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'What number is missing in the progression?';

const getData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 20);
  const progressionLength = getRandomNumber(5, 10);
  const indexOfMissingNumber = getRandomNumber(0, progressionLength - 1);

  const progressionWithMissingNumber = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === indexOfMissingNumber) {
      progressionWithMissingNumber.push('..');
    } else {
      progressionWithMissingNumber.push(firstNumber + progressionStep * i);
    }
  }
  const missingNumber = firstNumber + progressionStep * indexOfMissingNumber;

  const question = progressionWithMissingNumber.join(' ');
  const answer = missingNumber.toString();

  return { question, answer };
};

export default () => runGame(gameTitle, getData);
