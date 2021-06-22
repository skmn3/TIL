// 1. 생성자 함수의 동작 방식
const Person = function (name){
    this.name;
}; //함수의 표현식 방식

const foo = new Person('foo');
console.log(foo.name);
// 기존 함수에 new를 붙이던 생성자함수로 동작한다.
// 생성자 함수로 정의되어 있음을 알리기 위햐 함수 이름의 첫 글자를 대문자로 사용하길 권하고 있다.

// 생성자 함수의 동작방식 설명
// 1. Person함수가 호출되면 빈 객체를 생성한다. 생성된 빈 객체는 this에 바인딩된다.
// 2. this가 새로 생성된 빈 객체를 가리키므로 빈 객체에 대한 프로퍼티들을 생성한다.
// 3. 리턴
// 3-1. 리턴문이 없을 경우 this로 바인딩된 새로 생성된 객체가 반환된다.
// 3-2. 리턴값이 새로 생성된 객체가 아닌 다른 객체를 반환하는 경우에는 this가 아닌 해당 객체가 리턴된다.

// 2.

//3.생성자 함수를 new를 붙이지 않고 호출할 경우
// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// const qux = Person('qux', 20, 'man');
// console.log(qux); // 생성자 함수가 아닌 일반함수는 리턴값이 명시되어 있지 않으면 undefined 반환한다

// console.log(name); // 일반 함수의 this는 전역객체를 가르키게 된다.
// console.log(age);
// console.log(gender);