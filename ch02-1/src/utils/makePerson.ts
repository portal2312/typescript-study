export function makePerson(name: string, age: number) {
  return { name, age };
}

export function testMakePerson() {
  // eslint-disable-next-line no-console
  console.log(makePerson('Jane', 22), makePerson('Jack', 33));
}
