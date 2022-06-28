// 동등 연산자(==)와 일치 연산자(===)
const a = 1;
const b = '1';

const objA = {value : 100};
const objB = {value : 100};
const objC = objB;

console.log(a==b);
console.log(a===b);
console.log(objA==objB);
console.log(objB==objC);
console.log(objB===objC);

// 동등 연산자(==)와 일치 연산자(===)
// 동등 연산자(==)는 값이 같은지만 타입이 다른지를 판단한다.
// 일치 연산자(===)는 값과 타입이 모두 같은지를 판단한다.
