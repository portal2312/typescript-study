import { generator } from './generator'

console.log('generator-test started...');
for (let value of generator()) {
  console.log(value);
}
console.log('generator-test finished...');