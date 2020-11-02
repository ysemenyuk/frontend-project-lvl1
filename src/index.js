import promptly from 'promptly';

const roundCount = 3;

const runGame = async (gameTitle, getData) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ', { default: 'Player' });
  console.log(`Hello, ${name}!`);
  console.log(gameTitle);

  const runRound = async (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const { question, answer } = getData();
    // console.log(question, '-', answer);
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');
    if (userAnswer !== answer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    return runRound(acc - 1);
  };

  return runRound(roundCount);
};

export default runGame;
