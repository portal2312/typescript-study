import { random, gen } from './yield-return'

const iter = gen()

while(true) {
  const { value, done } = iter.next(random(10, 1));
  if (done) {
    break;
  }
  console.log('test:', value);
}

// random: 2
// gen started...
// while started...count: 4
// test: you select 0      
// random: 9
// while end...
// while started...count: 3
// test: you select 9      
// random: 1
// while end...
// while started...count: 2
// test: you select 1      
// random: 4
// while end...
// while started...count: 1
// test: you select 4      
// random: 8
// while end...
// while started...count: 0
// test: you select 8      
// random: 6
// while end...