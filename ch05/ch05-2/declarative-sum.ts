import { range } from './range'
import { fold } from './fold'

// Create input date
let numbers: number[] = range(1, 5 + 1);
console.log(numbers);

let result = fold(numbers, (result, value) => {
  console.log(result, value);
  return result + value;
}, 0);
console.log(result);