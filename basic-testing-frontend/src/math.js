export function add(numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += +number;
  }
  return sum;
}
