## 📕 스코프

- 스코프는  참조 대상 식별자(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙
- "변수에 접근할 수 있는 범위"

### 📒 스코프의 구분

- 자바스크립트에서 스코프를 구분해보면 다음과 같이 2가지로 나눌 수 있다.
  - 전역 스코프 (Global scope)
    - 코드 어디에서든지 참조할 수 있다.
  - 지역 스코프 (Local scope or Function-level scope)
    - 함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.

- 변수의 관점에서 스코프를 구분하면 다음과 같이 2가지로 나눌 수 있다.

- 전역 변수 (Global variable)
  - 전역에서 선언된 변수이며 어디에든 참조할 수 있다.
- 지역 변수 (Local variable)
  - 지역(함수) 내에서 선언된 변수이며 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

- 변수는 선언 위치(전역 또는 지역)에 의해 스코프를 가지게 된다. 

- 즉, 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수

- 지역(자바스크립트의 경우 함수 내부)에서 선언된 변수는 지역 스코프를 갖는 지역 변수가 된다.

### 📒 자바스크립트 스코프의 특징

- 대부분의 C-family language는 블록 레벨 스코프(block-level scope)를 따름
- 블록 레벨 스코프란 코드 블록({…})내에서 유효(“참조(접근)할 수 있는")한 스코프를 의미

```c
int main(void) {
  // block-level scope
  if (1) {
    int x = 5;
    printf("x = %d\n", x);
  }

  printf("x = %d\n", x); // use of undeclared identifier 'x'

  return 0;
}
```

- 위의 C언어 코드를 보면 if문 내에서 선언된 변수 x는 if문 코드 블록 내에서만 유효
-  즉, if문 코드 블록 밖에서는 참조가 불가능

- 하지만 자바스크립트는 함수 레벨 스코프(function-level scope)를 따름
- 함수 레벨 스코프란 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않다
- 단, ECMAScript 6에서 도입된 **let keyword**를 사용하면 블록 레벨 스코프를 사용할 수 있다.

```javascript
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
```

### 📒 전역 스코프(Global scope)

- 전역에 변수를 선언하면 이 변수는 어디서든지 참조할 수 있는 전역 스코프를 갖는 전역 변수 
- var 키워드로 선언한 전역 변수는 전역 객체(Global Object) `window`의 프로퍼티

```javascript
var global = 'global';

function foo() {
  var local = 'local';
  console.log(global);
  console.log(local);
}
foo();

console.log(global);
console.log(local); // Uncaught ReferenceError: local is not defined
```

- 자바스크립트는 타 언어와는 달리 특별한 시작점(Entry point)이 없다.

- C언어의 경우 main 함수가 시작점이 되기 때문에 대부분은 코드는 main 함수 내에 포함

- C언어의 경우 전역 변수를 선언하기 위해서는 의도적으로 main 함수 밖에 변수를 선언

```c
#include <stdio.h>

/* global variable declaration */
int g;

int main () {

  // local variable declaration
  int a, b;

  // actual initialization
  a = 10;
  b = 20;
  g = a + b;

  printf ("value of a = %d, b = %d and g = %d\n", a, b, g);

  return 0;
}
```

- 하지만 자바스크립트는 다른 C-family language와는 달리 특별한 시작점이 없으며 코드가 나타나는 즉시 해석되고 실행 
- 따라서 전역에 변수를 선언하기 쉬움

- 전역 변수의 사용은 변수 이름이 중복될 수 있고, 의도치 않은 재할당에 의한 상태 변화로 코드를 예측하기 어렵게 만드므로 사용을 억제하여야 한다.

### 📒 비 블록 레벨 스코프(Non block-level scope)

```javascript
if (true) {
  var x = 5;
}
console.log(x);
```

- 변수 x는 코드 블록 내에서 선언

- 하지만 자바스크립트는 블록 레벨 스코프를 사용하지 않으므로 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다할지라도 모두 전역 스코프을 갖게됨
- 따라서 변수 x는 전역 변수

### 📒 함수 레벨 스코프(Function-level scope)

```javascript
var a = 10;     // 전역변수

(function () {
  var b = 20;   // 지역변수
})();

console.log(a); // 10
console.log(b); // "b" is not defined
```

- 자바스크립트는 함수 레벨 스코프를 사용 

- 즉, 함수 내에서 선언된 매개변수와 변수는 함수 외부에서는 유효하지 않다. 
- 따라서 변수 b는 지역 변수

```javascript
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);
}

foo();          // local
console.log(x); // global
```

- 전역변수 x와 지역변수 x가 중복 선언 

- 전역 영역에서는 전역변수만이 참조 가능하고 함수 내 지역 영역에서는 전역과 지역 변수 모두 참조 가능하나 위 예제와 같이 변수명이 중복된 경우, 지역변수를 우선하여 참조

```javascript
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);

  function bar() {  // 내부함수
    console.log(x); // ?
  }

  bar();
}
foo();
console.log(x); // ?
```

- 내부함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있음

- 함수 bar에서 참조하는 변수 x는 함수 foo에서 선언된 지역변수

- 실행 컨텍스트의 스코프 체인에 의해 참조 순위에서 전역변수 x가 뒤로 밀렸기 때문

```javascript
var x = 10;

function foo() {
  x = 100;
  console.log(x);
}
foo();
console.log(x); // ?
```

- 함수(지역) 영역에서 전역변수를 참조할 수 있으므로 전역변수의 값도 변경 

- 내부 함수의 경우, 전역변수는 물론 상위 함수에서 선언한 변수에 접근/변경이 가능

```javascript
var x = 10;

function foo(){
  var x = 100;
  console.log(x);

  function bar(){   // 내부함수
    x = 1000;
    console.log(x); // ?
  }

  bar();
}
foo();
console.log(x); // ?
```

- 중첩 스코프는 가장 인접한 지역을 우선하여 참조한다.

```javascript
var foo = function ( ) {

  var a = 3, b = 5;

  var bar = function ( ) {
    var b = 7, c = 11;

// 이 시점에서 a는 3, b는 7, c는 11

    a += b + c;

// 이 시점에서 a는 21, b는 7, c는 11

  };

// 이 시점에서 a는 3, b는 5, c는 not defined

  bar( );

// 이 시점에서 a는 21, b는 5

};
```

### 📒 렉시컬 스코프

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```

- 프로그래밍 언어는 이 두가지 방식 중 하나의 방식으로 함수의 상위 스코프를 결정

- 첫 번째는 함수를 어디서 호출하였는지에 따라 상위 스코프를 결정하는 것

- 두 번째는 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정하는 것

- 첫 번째 방식을 동적 스코프(Dynamic scope)라 하고

- 두 번째 방식을 렉시컬 스코프(Lexical scope) 또는 정적 스코프(Static scope)라 한다. 

- 자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.

- 렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정 

- 자바스크립트는 렉시컬 스코프를 따르므로 함수를 선언한 시점에 상위 스코프가 결정

### 📒 암묵적 전역

```javascript
var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 식별자
  y = 20;
  console.log(x + y);
}

foo(); // 30
```

- 선언하지 않은 식별자에 값을 할당하면 전역 객체의 프로퍼티가 되기 때문이다.

- foo 함수가 호출되면 자바스크립트 엔진은 변수 y에 값을 할당하기 위해 먼저 스코프 체인을 통해 선언된 변수인지 확인한다.
- 이때 foo 함수의 스코프와 전역 스코프 어디에서도 변수 y의 선언을 찾을 수 없으므로 참조 에러가 발생해야 하지만 자바스크립트 엔진은 `y = 20`을 `window.y = 20`으로 해석하여 프로퍼티를 동적 생성
-  결국 y는 전역 객체의 프로퍼티가 되어 마치 전역 변수처럼 동작하는 현상을 암묵적 전역(implicit global)이라 한다.

- 하지만 y는 변수 선언없이 단지 전역 객체의 프로퍼티로 추가 ->  따라서 변수가 아닌 y는 변수 호이스팅이 발생하지 않는다.

```javascript
// 전역 변수 x는 호이스팅이 발생한다.
console.log(x); // undefined
// 전역 변수가 아니라 단지 전역 프로퍼티인 y는 호이스팅이 발생하지 않는다.
console.log(y); // ReferenceError: y is not defined

var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 변수
  y = 20;
  console.log(x + y);
}

foo(); // 30
```

- 또한 변수가 아니라 단지 프로퍼티인 y는 delete 연산자로 삭제할 수 있다. 

- 전역 변수는 프로퍼티이지만 delete 연산자로 삭제할 수 없다.

```javascript
var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 변수
  y = 20;
  console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y); // undefined
```

### 📒 최소한의 전역변수 사용

- 전역변수 사용을 최소화하는 방법 중 하나는 애플리케이션에서 전역변수 사용을 위해 다음과 같이 전역변수 객체 하나를 만들어 사용하는 것이다. (더글라스 크락포드의 제안)

```javascript
var MYAPP = {};

MYAPP.student = {
  name: 'Lee',
  gender: 'male'
};

console.log(MYAPP.student.name);
```

### 📒 즉시실행함수를 이용한 전역변수 사용 억제

- 전역변수 사용을 억제하기 위해, 즉시 실행 함수(IIFE, Immediately-Invoked Function Expression)를 사용

- 이 방법을 사용하면 전역변수를 만들지 않으므로 라이브러리 등에 자주 사용
- 즉시 실행 함수는 즉시 실행되고 그 후 전역에서 바로 사라짐

```javascript
(function () {
  var MYAPP = {};

  MYAPP.student = {
    name: 'Lee',
    gender: 'male'
  };

  console.log(MYAPP.student.name);
}());

console.log(MYAPP.student.name);
```

