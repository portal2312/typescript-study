import { IPerson } from './IPerson_ICompany'

let jack: IPerson = { name: 'jack', age: 32 };

// 비구조화
// let name = jack.name, age = jack.age;
// console.log(name, age);

let { name, age } = jack;
console.log(name, age);