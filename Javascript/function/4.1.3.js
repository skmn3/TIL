 // 함수 표현식 

const add1 = function(x,y){
  return x+y;
};

const plus = add1;

console.log(add1(3,4));
console.log(plus(5,6))

// 함수 표현식으로 함수를 생성한 경우 함수명으로 호출이 불가능하다.
console.log(`함수 표현식으로 함수를 생성한 경우 함수명으로 호출이 불가능하다. `)
const add2 = function sum(x,y) {
    return x+y;
};

console.log(add2(3,4));
// console.log(sum(1,2)); // 호출 불가능
  
const factorialconst = function factorial(n) {
  if(n<=1) return 1;
  else return n*factorial(n-1);
};

console.log(factorialconst(3));
// console.log(factorial(3)); // 호출 불가능
