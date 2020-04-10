function fn(arg1: string, arg?: number) {
  console.log(`arg: ${arg}`);
}

fn('hello', 1);
fn('hello');

// 선택적 매개변수가 있는 함수의 시그니처인 경우 타입 뒤에 물음표 붙이기
type OptionalArgFunc = (string, number?) => void;

let example: OptionalArgFunc = function(
    name: string,
    age?: number
  ): void {
    console.log(name, age);
};

example('Jane', 32);
example('Jane');