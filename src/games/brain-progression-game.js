import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTitle = 'What number is missing in the progression?';

const makeProgressionWithMissingNumber = (firstNum, step, length, indexOfMissingNum) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    if (i === indexOfMissingNum) {
      result.push('..');
    } else {
      result.push(firstNum + step * i);
    }
  }
  return result;
};

const getData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 20);
  const progressionLength = getRandomNumber(5, 10);
  const indexOfMissingNumber = getRandomNumber(0, progressionLength - 1);

  const progressionWithMissingNumber = makeProgressionWithMissingNumber(
    firstNumber,
    progressionStep,
    progressionLength,
    indexOfMissingNumber,
  );
  const missingNumber = firstNumber + progressionStep * indexOfMissingNumber;

  const question = progressionWithMissingNumber.join(' ');
  const answer = missingNumber.toString();

  return { question, answer };
};

export default () => runGame(gameTitle, getData);
