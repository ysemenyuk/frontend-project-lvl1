/* eslint-disable linebreak-style */
import promptly from 'promptly';

const getRandom = (minn, maxx) => {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const foo1 = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const iter = async (acc) => {
    if (acc >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const number = getRandom(1, 10);
    console.log('Question: ', number);
    const isEvenNumber = isEven(number);
    const question = await promptly.prompt('Your answer: ');
    if (question === isEvenNumber) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return console.log(`'${question}' is wrong answer ;(. Correct answer was '${isEvenNumber}' \nLet's try again, ${name}!`);
  };

  return iter(0);
};

export default foo1;
