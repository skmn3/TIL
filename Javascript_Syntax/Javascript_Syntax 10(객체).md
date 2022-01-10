## 📕객체(Object)

- 자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합

- 데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합

- 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부름

- 데이터와 동작을 하나의 단위로 구조화할 수 있어 유용함

### 📒 객체 생성 방법

- 자바와 같은 클래스 기반 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식으로 객체를 생성

- 하지만 자바스크립트는 프로토타입 기반 객체 지향 언어로서 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재

- __인스턴스__ : 생성자 함수를 통해 생성된 객체

#### 📗 객체 리터럴

- 중괄호({})를 사용하여 객체를 생성하는데 {} 내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체 생성

- { } 내에 아무것도 기술하지 않으면 빈 객체 생성

```jsx
var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```

#### 📗 Object 생성자 함수

- new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있음.

- 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법

- new 키워드와 함께 객체를 생성하고 초기화하는 함수

- Object 생성자 함수 이외에도 String, Number, Boolean, Array, Date, RegExp 등의 빌트인 생성자 함수를 제공

- 일반 함수와 생성자 함수를 구분하기 위해 생성자 함수의 이름은 파스칼 케이스(PascalCase)를 사용

##### 📃 파스칼 케이스(PascalCase) : 첫 문자를 대문자로 시작하는 표기법

- 객체 리터럴 방식으로 생성된 객체는 결국 빌트인 함수인 Object 생성자 함수로 객체를 생성하는 것을 단순화시킨 축약 표현

- 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object 생성자 함수를 사용하여 객체를 생성

```jsx
var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```

#### 📗 생성자 함수

- 생성자 함수를 사용하면 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있음

```jsx
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```

- 성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 줌
- 프로퍼티 또는 메소드명 앞에 기술한 `this`는 생성자 함수가 생성할 **인스턴스(instance)**를 가리킴
- this에 연결(바인딩)되어 있는 프로퍼티와 메소드는 `public`(외부에서 참조 가능)하다.
- 생성자 함수 내에서 선언된 일반 변수는 `private`(외부에서 참조 불가능)하다. 
- 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 없다.

### 📒 객체 프로퍼티 접근

#### 📗 프로퍼티 키

- 일반적으로 문자열(빈 문자열 포함)을 지정

- 프로퍼티 키는 문자열이므로 따옴표(‘’ 또는 ““)를 사용

- 하지만 자바스크립트에서 사용 가능한 유효한 이름인 경우, 따옴표를 생략할 수 있음

#### 📗 프로퍼티 값 읽기

- `마침표.` 표기법과 `대괄호[]` 표기법이 있음.

- 프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있음

- 프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우 프로퍼티 값은 대괄호 표기법으로 사용해야 함
- 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 함

- 객체에 존재하지 않는 프로퍼티를 참조하면 `undefined`를 반환

#### 📗 프로퍼티 값 갱신

- 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신

```jsx
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name'] ); // 'Kim'
```

#### 📗 프로퍼티 동적 생성

- 객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가

```jsx
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person.age = 20;
console.log(person.age); // 20
```

#### 📗 프로퍼티 삭제

- `delete` 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있음

- 이때 피연산자는 프로퍼티 키이어야 함

```jsx
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}
```

#### 📗 for-in 문

- for-in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있음
- for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법
- 배열에는 사용하지 않는 것이 좋음
- 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 
  - 그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문
  - 배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않음

```jsx
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/
```

- 배열 요소들만을 순회하지 않음

```jsx
// 배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/
```

- `for-in` 문의 단점을 극복하기 위해 ES6에서 for-of 문이 추가되었다.

```jsx
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/
```

- for–in 문은 객체의 프로퍼티를 순회하기 위해 사용

- for–of 문은 배열의 요소를 순회하기 위해 사용

### 📒 Pass-by-reference(참조에 의한 전달)

- object type을 객체 타입 또는 참조 타입이라 함
- 참조 타입이란? 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미
- 원시 타입은 값이 한번 정해지면 변경할 수 없음(immutable) 
- 객체는 프로퍼티를 변경, 추가, 삭제가 가능하므로 변경 가능(mutable)한 값이라 할 수 있음
- 객체 타입은 동적으로 변화할 수 있으므로 런타임에 메모리 공간을 확보하고 메모리의 힙 영역(Heap Segment)에 저장
  - 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없기 때문

```jsx
// Pass-by-reference
var foo = {
  val: 10
}

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true
```

- foo 객체를 객체 리터럴 방식으로 생성하였을 때 변수 foo는 객체 자체를 저장하고 있는 것이 아니라 객체의 참조값을 저장하고 있음

```jsx
var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);      // true
```

- 변수 baz와 변수 bar의 참조값은 동일함
- 변수 foo와 변수 bar는 내용은 같지만 별개의 객체를 생성하여 참조값을 할당
- 변수 foo와 변수 bar의 참조값 즉 어드레스는 동일하지 않음

- 참조하고 있는 객체의 val 값이 변경되면 변수 foo, bar 모두 동일한 객체를 참조하고 있으므로 두 변수 모두 변경된 객체의 프로퍼티 값을 참조하게 됨

```jsx
var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true
```

### 📒 Pass-by-value(값에 의한 전달)

- 원시 타입은 값(value)으로 전달 즉, 값이 복사되어 전달된다. 
- 이를 pass-by-value(값에 의한 전달)라 함. 

- 원시 타입은 값이 한번 정해지면 변경할 수 없다.(immutable) 

- 이들 값은 런타임에 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장됨

```jsx
// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false
```

- 참조 타입으로 저장되는 것이 아니라 값 자체가 저장되게 됨

- 변수 b에 변수 a를 할당할 경우, 변수 a의 값 1은 복사되어 변수 b에 저장됨

### 📒 객체의 분류(Classification of objects)

- Built-in Object(내장 객체는 웹페이지 등을 표현하기 위한 공통의 기능을 제공

- 웹페이지가 브라우저에 의해 로드되자마자 별다른 행위없이 바로 사용 가능

- Built-in Object 구분
  - Standard Built-in Objects (or Global Objects)
  - BOM (Browser Object Model)
  - DOM (Document Object Model)

- Standard Built-in Objects(표준 빌트인 객체)를 제외한 BOM과 DOM을 Native Object라고 분류
- 사용자가 생성한 객체를 Host Object(사용자 정의 객체)라 함
- Host Object(사용자 정의 객체)
- 사용자가 생성한 객체들임
- `Constructor` 혹은 객체리터럴을 통해 사용자가 객체를 정의하고 확장시킨 것들이기 때문에 Built-in Object 와 Native Object가 구성된 이후에 구성된다.

![object](https://poiemaweb.com/img/object.png)




