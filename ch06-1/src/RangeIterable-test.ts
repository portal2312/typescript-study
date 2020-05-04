import { RangeIterable } from './RangeIterable'

const iterable = new RangeIterable(1, 3 + 1);

for (let value of iterable) {
  console.log(value);
}

// 반복기(iterator)는 왜 필요한가
const range = (from, to) => {
  return from < to ? [from, ...range(from + 1, to)] : [];
};

// range 를 통해 미리 데이터를 생성하므로
// 메모리를 사용하고 있음
for (let value of range(1, 3 + 1)) {
  console.log(value);
}