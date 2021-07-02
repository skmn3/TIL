

## ※제어문(Control flow statement)

- 제어문(Control flow statement)은 주어진 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용

- 코드의 실행 순서를 인위적으로 제어 가능



## ※블록문(Block statement/Compound statement)

- 블록문(Block statement/Compound statement)는 0개 이상의 문들을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부름

- 블록문은 세미콜론을 붙이지 않음.
- 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수 선언문 등에서 사용
- 블록문을 하나의 단위로 취급
- 반대 개념으로는 공백문이 있으며, 이는 하나의 문을 기대하는 곳에 아무것도 제공하지 않음

```jsx
// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x); // 10

// 함수 선언문
function sum(x, y) {
  return x + y;
}

console.log(sum(1, 2)); // 3
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
console.log(y);
```

#### 2.1 블록 범위 규칙

- `var`로 선언한 변수는 블록 범위를  가지지 않음.

- 블록 내에서 선언한 변수의 범위는 함수나 스크립트가 되어, 값 할당의 영향이 블록 바깥까지 미침.

- 다른 말로는 블록문이 범위를 만들지 않음.

```jsx
var x = 1;
{
  var x = 2;
}
console.log(x); // 2 기록
```

- 블록 밖의 `var x`와 블록 안의 `var x`는 같은 범위에 속하기 때문에 2가 출력됨.

- C나 Java에서 같은 코드를 작성한다면 1을 출력됨.

#####  2.1.1   `let`과 `const` 사용 시

- 반면 `let`과 `const`로 선언한 식별자는 블록 범위를 가짐

```jsx
let x = 1;
{
  let x = 2;
}
console.log(x); // 1 기록
```

- `x = 2`는 선언한 블록으로 범위가 제한

- `const`도 마찬가지임.

```jsx
const c = 1;
{
  const c = 2;
}
console.log(c); // 1 기록, SyntaxError 없음
```

- 블록 내의 `const c = 2`가 `SyntaxError: Identifier 'c' has already been declared`를 나타내지 않음.

- 블록 범위 안이라 별개의 식별자이기 때문에 나타내지 않음.

- ES2015의 엄격 모드부터, 블록 내의 함수는 해당 블록으로 범위가 제한

- ES2015 이전의 엄격 모드에서는 블록 레벨 함수를 사용할 수 없었음.

##### 2.1.2`SyntaxError`   문제

- `SyntaxError`는 JavaScript 엔진이 코드를 분석할 때 문법을 준수하지 않은 코드를 만나면 발생



## ※조건문(conditional statement)

- 조건문(conditional statement)은 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블럭(블록문)의 실행을 결정

- 자바스크립트는 2가지의 조건문 if…else 문과 switch 문을 제공

- if…else 문으로 해결할 수 있다면 if…else 문을 사용하는 편이 좋다.

- 하지만 if…else 문보다 switch 문을 사용했을 때 가독성이 더 좋다면 switch 문을 사용하는 편이 더 좋다.

#### 3.1 if ~else문

- 주어진 조건식(불리언 값으로 평가될 수 있는 표현식)의 평가 결과, 즉 논리적 참, 거짓에 따라 실행할 코드 블록을 결정



```jsx
if (조건식) {
  // 조건식이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식이 거짓이면 이 코드 블록이 실행된다.
}
```

- 조건식의 평가 결과가 참(true)일 경우, if 문 다음의 코드 블록이 실행

- 거짓(false)일 경우, else 문 다음의 코드 블록이 실행

- 대부분의 if…else 문은 연산자에서 살펴본 삼항 조건 연산자로 바꿔쓸 수 있음



#### 3.2 switch문

- switch 문은 switch 문의 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동시킴

- case 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마치며, case 뒤에는 실행할 코드를 입력
- switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없다면 실행 순서는 default 문으로 이동

```jsx
switch (표현식) {
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2가 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
}
```

#### 3.3 if...else문 과 switch문 비교



##### 3.3.1 if...else문

- if…else 문의 조건식은 반드시 불리언 값으로 평가

- if…else 문은 논리적 참, 거짓으로 실행할 코드 블록을 결정



##### 3.3.2 switch 문 

- switch 문의 표현식은 불리언 값보다는 문자열, 숫자 값인 경우가 많음.

- switch 문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용



## ※반복문(Loop statement)

- 반복문(Loop statement)은 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행 그 후 조건식이 거짓일 때까지 반복

- 자바스크립트는 3가지의 반복문 for 문, while 문, do…while 문을 제공



#### 4.1 for문

- for 문은 조건식이 거짓으로 판별될 때까지 코드 블록을 반복 실행

- for문은 중첩사용 가능

```jsx
for (초기화식; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
```



다음은  for문 실행 순서이다.

![for문](https://poiemaweb.com/img/for-statement.png)



#### 4.2 while문

- while 문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행

- 조건문의 평가 결과가 거짓이 되면 실행을 종료

- 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제변환되어 논리적 참, 거짓을 구별

```jsx
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2
```



#### 4.3 do...while문

- do…while 문은 코드 블록을 실행하고 조건식을 평가

- 코드 블록은 무조건 한번 이상 실행

```jsx
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2
```



#### 4.4 break문

- 레이블 문, 반복문(for, for…in, for…of, while, do…while) 또는 switch 문의 코드 블록을 탈출하는 것

- break 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역할을 수행



##### 레이블 문(Label statement)이란?

식별자가 붙은 문을 말함

프로그램의 실행 순서를 제어하기 위해 사용

레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정



#### 4.5 continue 문

- continue 문은 반복문(for, for…in, for…of, while, do…while)의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동

- 코드 블록은 무조건 한번 이상 실행

```jsx
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === 'l') {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== 'l') continue;

  count++;
  // code
  // code
  // code
}
```

- if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하며 가독성도 좋다. 

- 하지만 if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문을 사용하는 것이 가독성이 더 좋다.