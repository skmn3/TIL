// 1. 비구조화 할당(객체, 배열) 기본
console.log(`1. 비구조화 할당(객체, 배열) 기본`);
const obj1 = {
    name: 'seo',
    age: 29,
    major: 'computer science',
};

console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.major);
console.log();

// 2. 비구조화 할당(객체, 배열) 예제
console.log(`2. 비구조화 할당(객체, 배열) 예제`);
const obj2 = {
    name: 'seo',
    age: 29,
    major: 'computer science',
};

const arr = ['seo', 29, 'computer sceince'];

const {name: nickname, age, major} = obj2; // name -> nickname
const [one, two, three] = arr;

console.log(nickname);
console.log(age);
console.log(major);

console.log(one);
console.log(two);
console.log(three);
console.log();

// 3. 함수의 파라미터에서의 비구조화 할당
console.log(`3. 함수의 파라미터에서의 비구조화 할당`);
const func = function( {a,b} ){
    console.log(a);
    console.log(b);
};

const obj3 = {a:1, b:2}

func(obj3);
