type PromiseObjectType = { name: string, age: number };

Promise.resolve(1)
  .then((value: number): Promise<boolean> => {
    console.log(value);
    return Promise.resolve(true);
  })
  .then((value: boolean): number[] => {
    console.log(value);
    return [1, 2, 3];
  })
  .then((value: number[]): PromiseObjectType => {
    console.log(value);
    return { name: 'jack', age: 32 };
  })
  .then((value: PromiseObjectType): void => {
    console.log(value);
  });