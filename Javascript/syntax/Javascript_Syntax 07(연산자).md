## 📕 표현식(Expression)과 연산자(Operator)

#### 📒 표현식과 연산자

- 표현식은 리터럴, 식별자, 연산자, 함수 호출 등의 조합을 말함
- 표현식은 평가(evaluation. 표현식을 실행하여 하나의 값을 만드는 과정)되어 하나의 값을 만든다

```jsx
// 리터럴 표현식
10 

// 식별자 표현식
sum

// 연산자 표현식
10 + 20

// 함수/메소드 호출 표현식
spuare()
```



#### 📒 문(statement)과 표현식(expression)

- 문(statement)은 자바스크립트 엔진에서 내리는 명령
- 변수 선언문을 실행하면 변수가 3단계에 의해 선언이 되고, 할당문을 실행하면 할당됨
- 조건문을 실행하면 주어진 조건에 따라 코드 블록({...})의 실행이 결정되고, 반복문을 실행하면 코드 블록이 반복 실행
- 문은 리터럴, 연산자, 표현식, 키워드 등으로 구성되며 세미콜론( ; )으로 끝나야 함(코드 블록{ ... }은 제외

```jsx
// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo (){}

// 조건문
if (X > 5){...}

// 반복문
for(var i=0; i < 10; i++){...}
```



#### 📒 문과 표현식 비교

- 표현식(Expression)은 값을 반환하는 식 또는 코드 
- 문(statement)은 프로그램을 구성하는 기본 단위이자 최소 실행 단위.
- 쉽게 말해서 문(statement)은 (while문, for문)과 같이 조건이며, 표현식은 코드 또는 식이라고 볼 수 있다.

#### 📒 표현식인 문과 표현식이 아닌 문

- 표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해 보는 것

```jsx
// 변수 선언문은 표현식이 아닌 문이다.
var x;

// 할당문은 그 자체가 표현식이지만 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다.
x = 100;
```

- 표현식인 문은 값으로 평가되므로 변수에 할당할 수 있음.

- 하지만 표현식이 아닌 문은 값으로 평가할 수 없으므로 변수에 할당하면 에러 발생

```jsx
// 표현식인 문은 값처럼 사용할 수 있다
var foo = x = 100;
console.log(foo); // 100
```

- 표현식인 문인 할당문은 할당한 값으로 평가

- 즉, x = 100은 x 변수에 할당한 값 100으로 평가 

- foo 변수에는 100이 할당

## 📕 연산자(Operator)

- 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만드는 것

- 연산의 대상을 피연산자라고 하는데 피연산자도 평가되어 하나의 값이 되어 표현식이고 피연산자를 연산자와 결합한 연산자 표현식도 표현식

```jsx
//산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
'My name is' + 'Lee' // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
3 > 5 // false

// 논리 연산자
(5 > 3) && (2 < 4)  // true

//타입 연산자
typeof 'Hi' // "string"
```



## 📕 산술 연산자(Arithmetic Operator)

- 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만듬. 

- 계산 할 수 없는 경우` Nan` 반환

- 이항 산술 연산자와 단항 산술 연산자로 구분

#### 📒 이항 산술 연산자(Binomial arithmetic operator)

- 이항산술연산자(Binomial arithmetic operator)는 2개의 피연산자를 대상으로 연산하여 숫자 타입의 값을 만듬

![자바스크립트 [javascript] (3장) 산술연산자](https://blog.kakaocdn.net/dn/bFaDxF/btqIruTADoi/T3LY6eveDTIhfgJJ61oQO0/img.png)

#### 📒 단항 산술 연산자(Unary arithmetic operator)

- 단항 산술 연산자(Unary arithmetic operator)는 1개의 피연산자를 대상으로 연산
- 증가/감소 연산을 하면 피연산자의 값이 바뀐다.

| 단항 산술 연산자 | 의미                                             |
| ---------------- | ------------------------------------------------ |
| ++               | 증가                                             |
| --               | 감소                                             |
| +                | 어떠한 효과도 없음.음수를 양수로 반전하지도 않음 |
| -                | 양수를 음수로 음수를 양수로 반전한 값을 반환함   |

- 단항 산술 연산자 예제

```javascript
var x = 5, result;

//선대입 후 증가(Postfix increment operator)
result = x++;
console.log(result, x); //5 6

//선증가 후대입(Prefix increment operator)
result = ++x;
console.log(result, x); //7 7

// 선대입 후감소(Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5
```



#### 📒  `–` 단항 연산자

- 피연산자의 부호를 반전한 값을 반환

```jsx
-10 // -10
- '10' // -10
-true // -1
-false // -0
```



#### 📒 문자열 연결 연산자(String concatenation operator)

- `+` 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작하고 그 외의 경우는 덧셈 연산자로 동작함.

```jsx
// 문자열 연결 연산자
'1'+'2' // '12'
'1'+2   // '12'

// 산술 연산자
1 + 2  // 3
1 + true // 2(true -> 1)
1 + false // 1(false - > 0)
true + false // 1(true->1 / false -> 0)
1 + null / 1(null -> 0)
1 + undefined // NaN(undefined -> NaN)
```



## 📕 할당 연산자(Assignment Operator)

- 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다
- 할당 연산 표현식을 다른 변수에 할당할 수도 있다.

```jsx
var x;

x = 10; // 10
x += 5; // 15
x -= 5; // 10
x *= 5; // 50
x /= 5; // 10
x %= 5; // 0

var str = 'My name is';
str += 'Lee'; //My name is Lee
```



```jsx
var x, y;
y = x = 10; // 연쇄 할당(Chained assignment)
console.log(x, y); // 10 10
```



## 📕 비교 연산자(Comparison Operator)

- 좌항과 우항의 피연산자를 비교하여 불리언 값을 반환하고, if 문이나 for 문과 같은 제어문의 조건식에서 주로 사용

- 비교 연산자는 피연산자 사이의 상대적인 크기를 판단하여, 참(true)과 거짓(false)을 반환합니다.

- 비교 연산자는 모두 두 개의 피연산자를 가지는 이항 연산자이며, 피연산자들의 결합 방향은 왼쪽에서 오른쪽임.



#### 📒 동등 / 일치 비교 연산자(Equality/match comparison operator)

| 비교 연산 | 의미        | 사례    | 설명                     |
| --------- | ----------- | ------- | ------------------------ |
| ==        | 동등 비교   | x==y    | x와 y의 값이 같음        |
| ===       | 일치 비교   | x===y   | x와 y의 값과 타입이 같음 |
| !=        | 부등 비교   | x !=y   | x와 y의 값이 다름        |
| !==       | 불일치 비교 | x !== y | x와 y의 값과 타입이 다름 |

- 동등 연산자(==)는 피연산자들의 값만 비교

- 일치 연산자(===)는 피연산자들의 값과 타입을 모두 비교

- 동등 비교 연산자는 좌항과 우항의 피연산자를 비교할 때 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값을 갖는지 비교함

```jsx
//동등 비교
5 == 5 //true
//타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치하면 같은 값을 가짐
5 == '5' //true
5 === 8 //false
//일치 비교
5 === 5 //true
5 ==='5' //false
```

- 따라서 좌항과 우항의 피연산자가 다르더라도 암묵적 타입 변환 후에 같은 값을 가질 수 있으면 `true`를 반환

```jsx
NaN===NaN //false
```

- `NaNdms` 자신과 일치하지 않는 유일한 값

```jsx
isNaN(NaN) // true
```

- 따라서 숫자가 `NaN`인지 조사하려면 빌트인 함수 `isNaN`을 사용함

```jsx
0 === -0 // true
```

- 숫자 0도 주의해야 함

```jsx
// 부동등 비교
5 != 8 //true
5 != 5 //false
5 != '5' //false

// 불일치 비교
5 !== 8 // true
5 !== 5 // false
5 !== '5' //true
```

##### 📗 다른 데이터 타입을 가진 값 비교

- 비교하려는 값의 데이터 타입이 다르면 자바스크립트는 이 값들을 숫자형으로 바꿈.

```jsx
console.log('01' == 1) // true, 문자열 '01'이 숫자 1로 변환된 후 비교 진행
```

- boolean의 경우 `true` 는 `1`, `false` 는 `0`으로 변환된 후 비교가 이루어짐

```jsx
console.log(true == 1) // true
console.log(false == 0) // true
```

- 동등연산자 `==`은 아래처럼 `0`과 `false`를 구별하지 못함.

```jsx
console.log(0  == false); // true
console.log('' == false); // true
```

- 동등연산자 `==`가 데이터 타입이 다른 피연산자를 비교할 때, 피연산자를 숫자로 바꾸기 때문에 이와 같은 일이 발생

- 일치연산자는 데이터타입의 동등여부까지 검사하기 때문에, 피연산자의 데이터타입이 다를 경우 `false`를 반환

```jsx
console.log(0 === false) // false
```

##### 📗 `null`이나 `undefined` 비교

- `null`과 `undefined` 모두 '값이 없다'는 값이자, 데이터 타입을 나타냄
- `null`은 값이지만 값으로서 의미없는 특별한 값이 등록되어 있는 것
-  `undefined`는 등록이 되어있지 않기 때문에 초기화도 정의되어 있지 않은 것

##### 📗 `==`(동등연산자)를 사용하여 null과 undefined 비교

- 동등연산자는 값만 비교하기 때문에 `null`과 `undefined`의 비교시 `true`를 반환합니다.

```jsx
console.log(null == undefined) //true
```

##### 📗 `===`(일치연산자)를 사용하여 null과 undefined 비교

- 일치연산자는 값과 타입을 비교하는데, `null`과 `undefined`의 데이터 타입이 다르기 때문에 `false`가 반환됨

```jsx
console.log(null === undefined) //false
```

#### 📒 대소 관계 비교 연산자(Case relational comparison operator)

![img](https://media.vlpt.us/images/moonsemi1230/post/473a834e-3002-4f05-b372-4016c142e766/2startup-javascript-8-638.jpg)

- 대소 관계 비교 연산자(Case relational comparison operator)는 피연산자의 크기를 비교하여 불리언 값을 반환

## 📕 삼항 조건 연산자(ternary operator)

- 조건식의 평가 결과에 따라 반환할 값을 결정

```jsx
조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값 
```

- 물음표(?) 앞의 첫번째 피연산자가 조건식, 즉 불리언 타입의 값으로 평가될 표현식

- 조건식이 참이면 콜론(:) 앞의 두번째 피연산자가 평가되어 반환되고, 거짓이면 콜론(:) 뒤의 세번째 피연산자가 평가되어 반환

#### 📒 if/else문

```jsx
// if문 안 특정 조건이 만족될 때 실행
const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log("if문 안의 a 값은" + a);
  찍히는 값 = 2
}
console.log("if문 밖의 a 값은" + a);
찍히는 값 = 1
// var로 선언하지 않는 이유(변수 선언이 정확하지 않다. 이제는 사용x)
// let, const로 선언하자!


const b = 8;
if (b === 5) {
  console.log("b의 값은 5입니다!");
} else if (b === 8) {
  console.log("b의 값은 8입니다!");
} else {
  console.log("b의 값은 5도 아니고 8도 아닙니다!");
}
```

#### 📒 swich/case 문

```jsx
const device = 'iphone';
switch (device){
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!')
    break;
  case 'galaxy':
    console.log('갤럭시!')
    break;
  default:
    console.log('이 기기를 모르겠어요..')
}
// break : case 한 부분 안에서 실행하고 끝
// default : 아무것도 일치 하지 않으면 실행
```

- case = if 역할
- break = return false; 역할
- default = else 역할

## 📕 논리 연산자(Logical Operator)

- 논리 연산자는 보통 `Boolean`값과 함께 쓰이며, `Boolean`값을 반환하며 JavaScript가 지원하는 논리 연산자는 아래와 같다.
  - __||__ : OR연산자
  - __&&__ : AND연산자
  - __!__ : NOT연산자

#### 📒`||` (OR연산자)

OR연산자는 두개의 `||`(역슬래쉬 기호)로 표시

```jsx
result = a || b;
```

인수 중 하나라도 `true`가 있으면 `true`를 반환하고 그렇지 않으면 `false`를 반환

##### 📗 OR연산자 예제

```jsx
o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
o10 = false || varObject // f || object returns varObject
```

- OR연산자는 두 피연산자가 모두 `false`일 때를 제외하고는 항상 `true`

- 피연산자가 `boolean`이 아닌 경우, 평가를 위해 `boolean`으로 변환

```jsx
if (1 || 0) { 	// if( true || false )처럼 동작
  alert( 'truthy!' );
}
```

- 위와 같이 숫자 1은 `true`, 숫자 0은  `false`로 처리됨

##### 📗 OR연산자의 구동방식

```jsx
// 1. 왼쪽부터 True 값을 찾아나간다.
// 2. True값을 찾은 경우, 해당값을 반환한다.
// 3. 마지막에 도달할 경우, 마지막 값을 반환한다.

true || true; // true
true || false; // true
false || true; // true
false || false; // false
false || "" || 500 || 300; // 500
```

##### 📗 OR연산자의 진위표

- x || y일 경우 피연산자가 모두 `false`일 때만 `false`값을 가짐

![img](https://media.vlpt.us/post-images/surim014/aca2b660-2c72-11ea-9073-a1d083e5fbc2/image.png)

#### 📒 `&&` (AND연산자)

- AND 연산자는 두개의 `&&`앤퍼센트 기호로 표시되며 두 피연산자가 모두 참일 경우에만 `true`이며 그렇지 않으면 `false`를 반환

```jsx
result = true && true;
console.log(result);	// true
```

##### 📗 AND연산자 예제

```jsx
a1 = true  && true       // t && t returns true
a2 = true  && false      // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = ''    && false      // f && f returns ""
a9 = false && ''         // f && f returns false
```

- OR과 마찬가지로 숫자 1은 true, 숫자 0은 false로 처리

##### 📗 AND연산자의 구동방식

```jsx
// 1. 왼쪽부터 False 값을 찾아나간다.
// 2. False값을 찾은 경우, 해당값을 반환한다.
// 3. 마지막에 도달할 경우, 마지막 값을 반환한다.

true && true; // true
true && false; // false
false && true; // false
false && false; // false
true && "231" && 0 && 300; // 0
```

##### 📗 AND연산자의 진위표

- x && y일 경우 피연산자 모두 `true`여야 `true`가 됨
  ![img](https://media.vlpt.us/post-images/surim014/48d34d10-2c73-11ea-8301-d322db631e8c/image.png)

##### 📗 AND연산자 사용 시, 주의할 점

- `&&`나 `||`를 실행한 결과값이 항상 `true`아니면 `false`라고 잘못 알고 있는 경우가 매우 많음.

```jsx
var something = true || false;
console.log(something); // true;

var somethingElse = true && 100;
console.log(somethingElse); // 100
```

- `somethingElse`가 `true`로 나올 것이라 예상을 하지만 `somethingElse`는 100이라는 숫자를 담게 됨

- ** `&&`(AND연산자)는 `||`(OR연산자)보다 우선순위가 높음
- `a && b || c && d` = `(a && b) || (c && d)`와 같다.

#### 📒 `!` (NOT연산자)

- NOT연산자는 `!`(느낌표)로 표시

```jsx
n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !''                 // !f returns true
n4 = !'Cat'              // !t returns false
```

- 피연산자를 `boolean` 유형으로 변환하여 `true` / `false`로 값을 나눈 후 그 결과값의 반대값을 반환

```jsx
alert( !!"non-empty string" ); 	// true
alert( !!null ); 				 // false
```

- `!!`를 이용하여 이중으로 NOT을 사용할 수 있음



## 📕 쉼표 연산자(The comma operator) 

- 쉼표(,) 연산자(The comma (,) operator )는 모든 연산자들 중에 우선 순위가 가장 늦음. 

- 그래서 쉼표 연산자가 다른 연산자의 방해를 받지 않고 먼저 실행되려면 연산식 전체를 반드시 괄호로 싸야 함.

```jsx
var x, y, z;
x = 1 , y = 2, z = 3; //3
```



## 📕 그룹 연산자(Group operator)

- 그룹 연산자(Group operator)는 일반 연산자 우선 순위를 재정의하기 위해 식 또는 하위 식을 둘러싼 한 쌍의 괄호로 구성되므로     우선 순위가 낮은식이 우선 순위가 높은 식보다 먼저 평가 됨.

- 이 연산자는 표현식만 포함 할 수 있음.

```jsx
10 * 2 + 3 // 23
10 * (2 + 3) // 50
```



## 📕 `typeof` 연산자(typeof operator)

```jsx
typeof ''               // "string"
typeof 1                // "number"
typeof NaN              // "number"
typeof true             // "boolean"
typeof Symbol()         // "symbol"
typeof null             // "object"
typeof []               // "object"
typeof {}               //"object"
typeof nuew Data()      // "object"
typeof /test/gi         // "object"
typeof function () {}   // "function"
```

- `typeof` 연산자는 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환
- `typeof` 연산자가 반환하는 문자열은 7개의 데이터 타입과 일치하지 않음
- `typeof` 연산자는 7가지 문자열 `string`, `number`, `boolean`, `undefined`, `symbol`, `object`, `function`중 하나를 반환
- `null`을 반환하는 경우는 없으며 함수의 경우 `function`을 반환

```jsx
typeof null //"object"
```

- `typeof`연산자로 `null` 값을 연산해 보면 `null` 이 아닌 `object`를 반환

```jsx
var foo = null; 
console.log(typeof foo === null); //false
console.log(foo === null);
```

- 따라서 `null` 타입을 확인할 때는 `typeof` 연산자를 사용하지 않고 일치 연산자( === )를 사용해야 함

```jsx
typeof undeclared //"undefined"
```

-  선언하지 않은 식별자를 `typeof` 연산자로 연산해 보면 ReferenceError가 발생하지 않고 `undefined`를 반환

