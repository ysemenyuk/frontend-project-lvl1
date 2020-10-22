#!/usr/bin/env node

import cli from '../src/cli.js';
import isEven from '../src/brain-even-app.js';

console.log('Welcome to the Brain Games!');
cli();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
isEven();
