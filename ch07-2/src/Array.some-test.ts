const isAnyTrue = (values: boolean[]): boolean => values.some((value => value === true));

console.log(
  isAnyTrue([false, true, false]),
  isAnyTrue([false, false, false])
);