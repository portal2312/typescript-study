/**
 * 객체와 클래스
 */

 // 클래스 선언문
class Person1 {
  name: string
  age?: number
}

let jack1: Person1 = new Person1();
jack1.name = 'jack1';
jack1.age = 32;
console.log(jack1);

// 접근 제한자
// public, private, protect


// 생성자
class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2('jack2', 32);
console.log(jack2);


// Person2 <- Person3
class Person3 {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3 : Person3 = new Person3('jack3', 32);
console.log(jack3);

// 인터페이스 구현
interface IPerson4 {
  name: string,
  age?: number
}

// class Person4 implements IPerson4 {
//   name: string
//   age: number
// }


class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}
let jack4: Person4 = new Person4('jack4', 32);
console.log(jack4);

// 추상 클래스
abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) {}
}

// 상속 클래스
class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}
let jack5: Person5 = new Person5('jack5', 32);
console.log(jack5);

// static 속성
class A {
  static initValue = 1
}

let initValue = A.initValue;
console.log(initValue);

// Exercise
abstract class Korean {
  static country = 'KO'
  abstract name: string
  constructor(public age?: number) {}
}

class Person6 extends Korean {
  constructor(
    public name: string,
    age?: number,
    public country: string = Korean.country,
    not_class_attr?: string
  ) {
    super(age)
  }
}

let hong: Person6 = new Person6('홍길동', 19);
console.log(hong);