export function* gen() {
  console.log('gen started...');
  let count = 5;
  let select = 0;
  while (count--) {
    console.log('while started...count:', count);
    select = yield `you select ${select}`;
    console.log('while end...');
  }
}

export const random = (max: number, min: number=0) => {
  const value = Math.round(Math.random() * (max-min)) + min;
  console.log('random:', value);
  return value;
}