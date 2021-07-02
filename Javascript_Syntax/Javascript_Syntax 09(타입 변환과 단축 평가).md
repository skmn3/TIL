## 타입 변환(Type conversion)과 단축 평가(Short-Circuit evaluation)

### ※타입 변환(Type conversion)

- 값의 타입은 다른 타입으로 개발자에 의해 의도적으로 변환

- 개발자에 의해 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(Explicit coercion) 또는 타입 캐스팅(Type casting)이라고 함

- 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 하는데,

- 이를 암묵적 타입 변환(Implicit coercion) 또는 타입 강제 변환(Type coercion)이라고 한다.

#### 1.1 암묵적 타입 변환(implicit coercion)

- Javascript 엔진이 코드의 문맥을 고려해서 암묵적으로 데이터 타입을 강제적으로 변환한다

- 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환

```jsx
// 숫자 타입
0 + ''              // "0"
-0 + ''             // "0"
1 + ''              // "1"
-1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
-Infinity + ''      // "-Infinity"
// 불리언 타입
true + ''           // "true"
false + ''          // "false"
// null 타입
null + ''           // "null"
// undefined 타입
undefined + ''      // "undefined"
// 심볼 타입
(Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
// 객체 타입
({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // ""
[10, 20] + ''       // "10,20"
(function(){}) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"
```

##### 1.1.1 String 타입으로 암묵적 변환

```jsx
0 + ''  // '0'
-0 + ''  // '0'
-10 + ''  // '-10'
1 + '2'  // '12'
NaN + ''  // 'NaN'

true + ''  // 'true'
null + ''  // 'null'
undefined + ''  // 'undefined'

[] + ''  // ''
[10, 20] + ''  // '10,20'
`1 + 2 = ${1 + 2}`  // '1 + 2 = 3'
```

##### 1.1.2 Number 타입으로 암묵적 변환

- 산술 연산자의 역할은 '숫자 값'을 만드는 것 
- 엔진도 문맥상 모든 피연산자가 `Number타입`이여야 한다고 판단해 암묵적으로 타입을 변환
- 비교 연산자 또한 크기를 비교하는 역할이기 때문에 같은 이유로 `Number 타입`으로 변환

```jsx
// 숫자 타입
0 + ''              // "0"
-0 + ''             // "0"
1 + ''              // "1"
-1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
-Infinity + ''      // "-Infinity"
// 불리언 타입
true + ''           // "true"
false + ''          // "false"
// null 타입
null + ''           // "null"
// undefined 타입
undefined + ''      // "undefined"
// 심볼 타입
(Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
// 객체 타입
({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // ""
[10, 20] + ''       // "10,20"
(function(){}) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"
```

- `+` 단항 연산자 또한 피연산자가 `Number 타입`이 아니면 `Number 타입`으로 암묵적 타입 변환을 함

- 추가로 특이한 점은 `빈문자열(")`, `빈배열([])`은 0으로 변환되지만, `비어있지 않은 배열`이나 `객체`, `함수`, `undefined`는 `NaN`이 됨
- `+` 연산자는 다른 수학적 연산자들과는 다르게 2가지 기능을 한다.
  1. 수학적인 덧셈
  2. 문자열 합치기
- 문자열이 `+` 연산자의 피연산자로 주어졌을 때, 자바스크립트는 문자열을 숫자로 바꾸려하지 않고 숫자를 문자로 바꾸려한다.

```jsx
// 문자열 타입
+''             // 0
+'0'            // 0
+'1'            // 1
+'string'       // NaN
// 불리언 타입
+true           // 1
+false          // 0
// null 타입
+null           // 0
// undefined 타입
+undefined      // NaN
// 심볼 타입
+Symbol()       // TypeError: Cannot convert a Symbol value to a number
// 객체 타입
+{}             // NaN
+[]             // 0
+[10, 20]       // NaN
+(function(){}) // NaN
```

- `빈 문자열(")`, `빈 배열([])`, `null`, `false`는 0으로, `true`는 1로 변환
- 객체와 빈 배열이 아닌 배열, `undefined`는 변환되지 않아 `NaN`이 됨

##### 1.1.3 boolean 타입으로 암묵적 변환

- if문, for문 등의 제어문과 삼항 조건 연산자의 조건식은 boolean값을 평가 결과로 나타내야 함
- Javascript 엔진은 조건식의 결과값을 `boolean` 타입으로 암묵적으로 변환
- 이 때 truthy(참으로 평가되는 값)는 `true`로, falsy(거짓으로 평가되는 값)는 `false`로 변환
- 아래 값들은 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 컨텍스트에서 `false`로 평가되는 Falsy 값
  - `false`
  - `undefined`
  - `null`
  - `0, -0`
  - `NaN`
  - `" (빈문자열)`

```jsx
// truthy
if (true) console.log('ok');  // ok
if ('hi') console.log('ok');  // ok

//falsy
if (false) console.log('ok');  // undefined
if (undefined) console.log('ok');  // undefined
if (null) console.log('ok');  // undefined
if (0) console.log('ok');  // undefined
if (-0) console.log('ok');  // undefined
if (NaN) console.log('ok');  // undefined
if ('') console.log('ok');  // undefined
```

### 1.2 명시적 타입 변환(**Explicit** Type Conversion)

- 명시적 타입 변환은 사용자가 의도적으로 하는 것

##### 1.2.1 String 타입으로 명시적 변환

- 문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법

1. `String 생성자 함수`를 new 연산자 없이 호출하는 방법
2. `Object.prototype.toString` 메소드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```jsx
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"
```

##### 1.2.2 Number 타입으로 변환

숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법

1. `Number 생성자 함수`를 new 연산자 없이 호출하는 방법
2. `parseInt, parseFloat 함수`를 사용하는 방법(문자열만 변환 가능)
3. 단항 연결 연산자를 이용하는 방법
4. 산술 연산자를 이용하는 방법

```jsx
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0
```

##### 1.2.3 boolean 타입으로 변환

1. `Boolean 생성자 함수`를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두번 사용하는 방법

```jsx
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true
```

### ※단축 평가(Short-Circuit evaluation)

- 단축 평가(Short-Circuit evaluation)는 논리 평가를 결정한 피연산자의 평가 결과를 그대로 반환하는 것

```jsx
'Cat'||'Dog' //'Cat'
```

논리합 연산자 `||`는 두 개의 피연산자 중 하나만 `true`로 평가되어도 `true`로 반환

- 첫번째 피연산자 ‘Cat’은 Truthy 값이므로 `true`로 평가

- 이 시점에 두번째 피연산자까지 평가해 보지 않아도 위 표현식을 평가할 수 있음

- 논리합 연산자 `||`는 논리 연산의 결과를 결정한 첫번째 피연산자의 평가 결과 즉, 문자열 ‘Cat’를 그대로 반환

  ```jsx
  // 논리합(||) 연산자
  'Cat' || 'Dog'  // 'Cat'
  false || 'Dog'  // 'Dog'
  'Cat' || false  // 'Cat'
  
  // 논리곱(&&) 연산자
  'Cat' && 'Dog'  // Dog
  false && 'Dog'  // false
  'Cat' && false  // false
  ```

##### 2.1 단축 평가 규칙

| 단축 평가 표현식    | 평가 결과 |
| ------------------- | --------- |
| true \|\| anything  | true      |
| false \|\| anything | anything  |
| true && anything    | anything  |
| false && anything   | false     |

##### 2.2 객체가 null인지 확인하고 프로퍼티를 참조할 때

```jsx
var elem = null;

console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null
```

- 객체는 키와 값으로 구성된 프로퍼티들의 집합.
- 만약 객체가 `null`인 경우 객체의 프로퍼티를 참조하면 타입 에러 발생.

##### 2.3 함수의 인수를 초기화할 때

```jsx
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2j
```

- 함수를 호출할 때 인수를 전달하지 않으면 매개변수는 `undefined`를 가짐.

- 이때 단축 평가를 사용하여 매개변수의 기본값을 설정하면 `undefined`로 인해 발생할 수 있는 에러를 방지할 수 있음.