import { range } from '../ch05-1/range'

let square: number[] = range(1, 5 + 1)
  .map((val: number) => val * val);

console.log(square);
