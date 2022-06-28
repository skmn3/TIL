# 📕 객체와 변경불가성(Objects and immutability)

- 변경불가성은 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴을 의미
- Immutabiliity은 함수형 프로그래밍의 핵심 원리
- 객체는 참조(reference)형태로 전달하고 전달받음.

- ES6에서는 불변 데이터 패턴을 쉽게 구현할 수 있는 새로운 기능이 추가되었다.

### 📒 Immutable value(불변 값) VS Mutable value(가변 값)

- Javascript의 원시 타입은 변경 불가능한 값
  - `boolean``
  - ``null`
  - undefined
  - ``number`
  - string
  - ``symbol`
- 원시 타입 이외의 모든 값은 객체 타입이다.
- 객체 타입은 변경 가능한 값으로 객체는 새로운 값을 다시 만들 필요없이 직접 변경 가능하다

```jsx
var str = 'Hello';
str = 'world';
```

- 첫번째 구문이 실행되면 메모리에 문자열 'Hello'가 생성
- 식별자 str은 메모리에 문자열 'Hello'의 메모리 주소를 가리킴
- 두 번째 구문이 실행되면 이전에 생성된 문자열 'Hello'를 수정하는 것이 아닌 새로운 문자열 'world'를 메모리에 생성
- 식별자 `str`은 이것을 가리킴.
- 이때 문자열 'Hello'와 'world'는 모두 메모리에 존재함
- 즉, Hello 문자열이 변경되는 것이 아니라 world, Hello 각각 메모리에 할당됨
- 변수 str은 문자열 'Hello'를 가리키고 있다가 문자열 'world'를 가리키도록 변경

```jsx
var statement = 'I am an immutable value'; // string은 immutable value

var otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'
```

- 위 코드의 `otherStr` 의 값은 `statement` 가 가리키는 문자열을 변형한 것이 아닌 해당 문자열을 가지고 새로운 문자열을 만들어 메모리에 할당한 것
- 2행에서 `String`객체의 `slice()`메서드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있음.
  - 문자열은 변경할 수 없는 `Immutable value`이기 때문이다.

```jsx
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim
```

- `user.name`의 값을 변경했지만 변수 `myName`의 값은 변경되지 않았음
- 변수 `myName`에 `user.name`을 할당했을 때 `user.name`의 참조를 할당하는 것이 아니라 immutable한 값 'Lee'가 메모리에 새로 생성되고 `myName`은 이것을 참조하기 때문
- 따라서 `user.name`의 값이 변경된다 하더라도 변수 `myName`이 참조하고 있는 'Lee'는 변함이 없음

### 📒 불변 데이터 패턴(immutable data pattern)

- 의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 "레퍼런스를 참조한 다른 객체에서 객체를 변경"하기 때문
  - 이 문제의 해결 방법은 비용은 조금 들지만 객체를 불변객체로 만들어 프로퍼티의 변경을 방지하며 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경한다.

#### 📗 객체의 방어적 복사(defensive copy)

- `Object.assign`

#### 📗 불변객체화를 통한 객체 변경 방지

- `Object.freeze`

#### 📗 Object.assign

- `Object.assign`은 타깃 객체로 소스 객체의 프로퍼티를 복사
- 이때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타겟 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰게 되고 리턴 값으로 타깃 객체를 반환
- ES6에서 추가된 메서드로 Internet Explorer는 지원하지 않음

```jsx
// Syntax
Object.assign(target, ...sources)
// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
```

- `Object.assign`을 사용하여 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있음.
- `Object.assign`은 완전한 deep copy를 지원하지 않음
- 객체 내부의 객체(Nested Object)는 Shallow copy된다.

```jsx
const user1 = {
     name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```

- `userl`객체를 빈객체에 복사하여 새로운 객체 `user2`를 생성함.
- `userl`과 `user2`는 어드레스를 공유하지 않으므로 한 객체를 변경하여도 다른 객체에 아무런 영향을 주지 않음.

#### 📗 Object.freeze

- `Object.freeze()`를 사용하여 불변(immutable) 객체를 만들 수 있음

```jsx
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시됨

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true
```

- 객체 내부의 객체(Nested Object)는 변경 가능

```jsx
const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

Object.freeze(user);

user.address.city = 'Busan'; // 변경됨
console.log(user); // { name: 'Lee', address: { city: 'Busan' } }
```

- 내부 객체까지 변경 불가능하게 만들려면 `Deep freeze`를 하면 됨

```jsx
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

deepFreeze(user);

user.name = 'Kim';           // 무시됨
user.address.city = 'Busan'; // 무시됨

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }
```

#### 📗 Immutable.js

- `Object.assign`과 `Object.freeze`을 사용하여 불변 객체를 만드는 방법은 번거러울 뿐더러 성능상 이슈가 있어서 큰 객체에는 사용하지 않는 것이 좋음.
- 또 다른 대안으로 Facebook에서 제공하는 Immutable.js를 사용하는 방법이 있음.
- `Immutable.js`는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 (Permit Immutable) 데이터 구조 제공
- npm을 사용하여 Immutable.js를 설치

```jsx
$ npm install immutable
```

- `Immutable.js`의 Map 모듈을 임포트하여 사용

```jsx
const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50
```

- map1.set(‘b’, 50)의 실행에도 불구하고 map1은 불변함. map1.set()은 결과를 반영한 새로운 객체를 반환