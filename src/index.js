/* eslint-disable linebreak-style */
import promptly from 'promptly';

const roundCount = 3;
const getQuestion = (data) => data.question;
const getAnswer = (data) => data.answer;

const runGame = async (gameTitle, getData) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTitle);

  const runRound = async (acc) => {
    if (acc >= roundCount) {
      return console.log(`Congratulations, ${name}!`);
    }
    const roundData = getData();
    const question = getQuestion(roundData);
    const answer = getAnswer(roundData);
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');
    if (userAnswer !== answer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}' \nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    return runRound(acc + 1);
  };

  return runRound(0);
};

export default runGame;
