import { validateNumber, validateStringNotEmpty } from "./validation";
import { add } from "../math";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  let result = add(numbers)
  return result;
}
