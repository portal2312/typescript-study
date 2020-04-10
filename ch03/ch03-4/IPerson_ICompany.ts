/**
 * 객체의 비구조화 할당문
 */

let personName = 'jack';
let personAge = 32;

let companyName = 'Apple Company, Inc';
let CompanyAge = 43;

// 구조화
export interface IPerson {
  name: string,
  age: number
}

export interface ICompany {
  name: string,
  age: number
}