let o: object = { name: 'Jack', age: 32 };
o = { first: 1, second: 2 };
console.log(o);


// interface
interface IPerson {
  name: string,
  age: number
};

let good: IPerson = { name: 'Jack', age: 33 };
console.log(good);
// let bad1: IPerson = { name: 'Jack' };
// let bad2: IPerson = { age: 32 };
// let bad3: IPerson = {};
// let bad4: IPerson = { name: 'Jack', age: 33, etc: true };


// optional property (선택 속성)
interface IPerson2 {
  name: string,
  age: number,
  etc?: boolean
};
let good1: IPerson2 = { name: 'Jack', age: 32 };
console.log(good1);
let good2: IPerson2 = { name: 'Jack', age: 32, etc: true };
console.log(good2);


// anonymous interface (익명 인터페이스)
let ai: {
  name: string,
  age: number,
  etc?: boolean
} = { name: 'Jack', age: 32 };

// for examples:
function printMe(me: {name: string, age: number, etc?: boolean}) {
  console.log(
    me.etc ?
      `${me.name} ${me.age} ${me.etc}` :
      `${me.name} ${me.age}`
  );
}
printMe(ai);