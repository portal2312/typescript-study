export class C {
  static whoAreYou(): string {
    return `I am class C`;
  }
}

export class D {
  static whoAreYou(): string {
    return `I am class D`;
  }
}

console.log(C.whoAreYou());
console.log(D.whoAreYou());