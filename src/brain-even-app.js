/* eslint-disable linebreak-style */
import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('Your answer: ');
  console.log(`H, ${name}!`);
};
