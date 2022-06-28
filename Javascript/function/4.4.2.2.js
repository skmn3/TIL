// 1. 전역 객체와 전역변수와의 관계
console.log(`1. 전역 객체와 전역변수와의 관계`);
var foo = "I'm foo";
console.log(foo);
console.log(global.foo);
console.log();
// foo하는 변수는 전역 객체 window의 프로퍼티이다.

// 2. 함수를 호출할때 this 바인딩
console.log(`2. 함수를 호출할때 this 바인딩`);
var abc = "This is the test";
const sayFoo = function(){
    console.log(this.abc); // 이는 console.log(window.test)와 같다.
    // 왜냐하면 함수를 호출할때 this가 바인딩 되기 때문
}
console.log(sayFoo());
console.log();

// 3.내부 함수의 this 바인딩 동작
console.log(`3.내부 함수의 this 바인딩 동작`);
const value1 = 100;
const myObject1 = {
    value: 1,
    func1: function() {
        this.value += 1;
        console.log(`func1() called. this.value : ` + this.value);
        func2 = function(){
            this.value += 1;
            console.log(`func2() called. this.value : ` + this.value);
            func3 = function(){
                this.value += 1;
                console.log(`func3() called. this.value : ` + this.value);
            } 
            func3();
        }
        func2();
    }
};
myObject1.func1();
console.log();

// 4. 생성자 함수의 this 바인딩(feat. that)
console.log(`4. 생성자 함수의 this 바인딩(feat:: that)`);
const value2 = 100;
const myObject2 = {
    value: 1,
    func1: function() {
        const that = this;
        this.value += 1;
        console.log(`func1() called. this. value : `+ this.value);
        func2 = function(){
            that.value += 1;
            console.log(`func2() called. this. value : `+ that.value);
            func3 = function(){
                that.value += 1;
                console.log(`func3() called. this. value : `+ that.value);
            }
            func3();
        }
        func2();
    }
};
myObject2.func1(); 
