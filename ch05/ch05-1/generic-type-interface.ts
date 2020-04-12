const identity = <T>(n: T): T => n;

console.log(
  identity<boolean>(true),
  identity(true)
);

const normal = (cb: (a: number, number?) => number): void => {};

// const f = <T>(ch: (arg: T, i?: number) => number): void => {};