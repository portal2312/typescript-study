import { pureDelete } from './pureDelete'

const mixedArray: object[] = [
  [], {name: 'Jack'}, {name: 'Jane', age: 32}, ['description']
];
const objectOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val));
console.log(mixedArray)
console.log(objectOnly);