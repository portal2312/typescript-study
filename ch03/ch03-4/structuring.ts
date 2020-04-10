import { IPerson, ICompany } from './IPerson_ICompany'

let jack: IPerson = { name: 'jack', age: 32 };
let jane: IPerson = { name: 'jane', age: 32 };
console.log(jack, jane);

let apple: ICompany = { name: 'Apple Computer, Inc', age: 43 };
let ms: ICompany = { name: 'Microsoft', age: 44 };
console.log(apple, ms);

// 비구조화
let name = jack.name, age = jack.age;
console.log(name, age);