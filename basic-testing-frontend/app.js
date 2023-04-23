import { extractformData } from './src/parser.js';
import { cleanNumbers } from './src/util/numbers.js';

import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractformData();

  let result = '';
  
  try {

    result = cleanNumbers(numberInputs).toString()
    
  } catch (error) {
    result = error.message;
  }

  

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
