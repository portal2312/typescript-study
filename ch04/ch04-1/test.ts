function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2);
console.log(result);

// void
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}
console.log(printMe('Jane', 32));

// function signature
let printMe1: (string, number) => void = function(name: string, age: number): void {};
