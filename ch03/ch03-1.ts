// type annotation (타입 주석)
let n: number = 1;
let b: boolean = true;
let s: string = 'hello';
let o: object = {};
// n = 'a';  // error
console.log(o);


// type inference (타입 추론)
let g = 1;
// g = 'a';  // error
console.log(g);


// any type
let a: any = 0;
a = 'hello';
a = true;
a = {};
console.log(a);


// undefined type
let u: undefined = undefined;
// u = 1;  // error
console.log(u);


/**
 * type tree
 * 
 * - any
 *   - number, boolean, string
 *   - object
 *     - interface, class
 *   - undefined
 */

// Template literals (템플릿 문자열)
let count = 10, message = 'Your count';
let result = `${message} is ${count}`;
console.log(result);