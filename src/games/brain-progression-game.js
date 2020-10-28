import runGame from '../index.js';
import { getRandom } from '../utils.js';

const getData = () => {
  const numStart = getRandom(1, 20);
  const numLength = getRandom(6, 9);
  const numMiss = getRandom(1, numLength);
  // console.log(numStart, numLength, numMiss)
  const iter = (acc, arr) => {
    if (acc === numLength) {
      return arr;
    }
    if (acc === numMiss) {
      arr.push('..');
    } else {
      arr.push(numStart + acc);
    }
    return iter(acc + 1, arr);
  };
  const question = iter(1, []).join(' ');
  // console.log(question);

  const answer = (numStart + numMiss).toString();
  // console.log(answer);

  return { question, answer };
};

const gameTitle = 'What number is missing in the progression?';
const startGame = () => runGame(gameTitle, getData);

export default startGame;
