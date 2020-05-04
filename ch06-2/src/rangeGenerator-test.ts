import { rangeGenerator } from './rangeGenerator'

// while pattern 으로 동작하는 generator
let iterator = rangeGenerator(1, 3 + 1);
while(1) {
  const { value, done } = iterator.next();
  if (done) {
    break;
  }
  console.log(value);
}

// for...of statement 으로 동작하는 generator
for (let value of rangeGenerator(1, 3 + 1)) {
  console.log(value);
}