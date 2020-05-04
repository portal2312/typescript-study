import { createRangeIterable } from './createRangeIterable'
const iterator = createRangeIterable(1, 3 + 1);
console.log(iterator);
while(true) {
  const { value, done } = iterator.next();
  if (done) {
    break;
  }
  console.log(value);
}