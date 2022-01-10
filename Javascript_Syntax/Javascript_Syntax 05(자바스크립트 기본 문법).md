## 📕 변수(Variable)

- 자바스크립트에는 변수형(int, double, string)이 존재하지 않는다. 

- `var` 이라는 가변형 변수만 존재하여 초기화 할때 형태에 따라서 알아서 할당된다.



## 📕 값(Value)

- 프로그램에 의해 조작될 수 있는 대상

- `Javascript`는 데이터 타입을 가짐
- 원시 타입(`primitive data type`)을 제외한 나머지 값들(`함수`, `배열`, `정규표현식` ) 은 모두 객체이다.

![자바스크립트- 데이터 타입 정리](https://media.vlpt.us/images/imjkim49/post/17b7a314-31f4-4285-a2dd-05a4cc78fbf3/image.png)





#### 📗 프로퍼티(property)란? 

>  `property` 는 해당 object의 특징

- `property` 는 보통 데이터 구조와 연관된 속성을 나타냄.

- `property`의 2가지 종류 
  - Instance property : 특정 object 인스턴스의 특정한 데이터를 가짐. 
  - Static Property : 모든 object 인스턴스들에게 공유 된 데이터를 가짐. 



## 📕 연산자 (Operator)



- 연산자(`Operator`) 는 하나 이상의 표현식을 대상으로 연산을 수행해 하나의 값을 만듬.

- 이때 연산의 대상을 피연산자( `Operand` )라 한다.
- `Javascript` 는 암묵적 타입 강제 변환을 통해 연산을 수행한다.

![그림1. 20171207_001_java-Types-of-Operators](https://cremazer.github.io/assets/img/java/20140919/20171207_001_java-Types-of-Operators.jpg)



## 📕 키워드(Keyword)

- 키워드는 수행할 동작을 규정한 것

- `var` 키워드는 새로운 변수를 생성할 것을 지시함.



## 📕 주석(Comment)

- 주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용됨.

- 한 줄 주석은 // 사용. 

- 여러줄 주석 /* 와 */ 사용.

- 해석기(parser)가 무시하며 실행되지 않는다.



## 📕 문(Statement)

- 문(statement)은 실행 가능한 최소의 독립적인 코드 조각

- 문은 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성하며세미콜론으로 끝나야 함.



- 다른 언어와 달리 `Javascript` 에서는 블록 유효범위(Block-level scope)를 생성하지 않음.

- 함수 단위의 유효범위(Function-level scope)에서만 생성됨.



## 📕 표현식(Expression)

- 표현식(Expression)은 값을 반환하는 식 또는 코드

- 변수에 값을 할당하는 표현식 
  - __EX)__ x = 7, y = 6

- 어떤 의미에서 평가하여 값으로 해석되는 표현식 
  - __EX)__ 3+4



## 📕 문과 표현식의 비교

- 표현식(Expression)은 값을 반환하는 식 또는 코드

- 문(statement)은 실행 가능한 최소의 독립적인 코드 조각이지만 값을 만들지는 않는다.

- 따라서 문(statement) 안에 표현식(expression)이 있다.





![img](https://media.vlpt.us/images/_uchanlee/post/b935aaa6-02ff-49e4-8086-407d813c1387/statement_expression-diagram.svg)





## 📕 함수 (Function)

- 함수(function)는 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능

- 한번만 호출할 수 있는 것이 아니라 여러번 호출가능.

- 코드의 재사용 측면에서 유용함.



>  __파라미터(매개변수, 인자)__ : 함수를 만들 때 `function` 이라는 키워드를 사용하며, 어떤 값을 받아올지를 정해주는 것



## 📕 객체(Object)

> `객체`는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줌.

- 객체는 데이터를 의미하는 프로퍼티와 데이터를 참조하며, 조작할 수 있는 동작을 의미하는 __메소드__로 구성된 집합.



#### 📗 메소드(Method)란?

>  `메소드`는 객체에 제한되어 있는 함수를 의미함.



## 📕 배열(Array)

>  `배열`은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용하며, 유용한 내장 메소드를 포함