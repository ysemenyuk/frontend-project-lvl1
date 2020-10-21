/* eslint-disable linebreak-style */
import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
