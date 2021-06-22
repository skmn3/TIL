// 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝
const myObject ={
    name: 'foo',
    sayName: function(){
        console.log('My Name is' + this.name);
    }
};
myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickname'));
myObject.sayNickname();
// hasOwnProperty()메서드: 이 메서드를 호출한 객체에 인자로 넘긴 문자열이름의 프로퍼티에 있는지 체크하는 자바스크립트 표준 ApI함수이다.

// 객체 리터럴 방식으로 생성된 객체는 내장 Object()라는 생성자 함수로 생성된다.
// 생성자 함수 OBject()는 자신의 부모 객체로서 Object.prototype을 갖는다.

// 생성자 함수의 prototype 링크 생성자 함수.prototype을 가리킨다.
// 생성자 함수가 생성한 객체의 __proto__는 생성자 함수.prototypr을 가리킨다.

// 생성자 함수가 정의되면 함수. prototype이 자동으로 생성됨
// 생성자 함수를 통해 여러 객체가 생성되었고, 각 객체에 동일한 메서드를 사용하고 싶을 경우 함수.prototype안에 메서드를 추가해 놓는다.
// 그러면 모든 객체들이 함수.prototype안의 메서드를 참조할수 있다.
