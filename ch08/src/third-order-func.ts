import { FirstOrderFunc, SecondOrderFunc, ThirdOrderFunc } from './function-signature'

export const add3: ThirdOrderFunc<number, number> =
  (x: number): SecondOrderFunc<number, number> =>
  (y: number): FirstOrderFunc<number, number> =>
  (z: number): number => {
    console.log(x, y, z);
    return x + y + z;
  }