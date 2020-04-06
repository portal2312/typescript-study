interface IAgeable {
  age?: number
}

function getAge(o: IAgeable) {
  // 선택 속성이 있는 경우
  return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));