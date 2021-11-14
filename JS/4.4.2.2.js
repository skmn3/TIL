// 1. 전역 객체와 전역변수와의 관계
// var foo = "I'm foo";
// console.log(foo);
// console.log(global.foo);
// foo하는 변수는 전역 객테 window의 프로퍼티이다.

// 2. 함수를 호출할때 this 바인딩
// var abc = "This is the test";
// console.log(window.abc);
// const sayFoo = function(){
//     console.log(this.abc); //이는 console.log(window.test)와 같다.
//     // 왜냐하면 함수를 호출할때 this가 바인딩 되기 때문
// }

// 3.내부 함수의 this 바인딩 동작
const value = 100;
const myObject = {
    value: 1,
    func1: function(){
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
myObject.func1();

// 4.
// const value = 100;
// const myObject = {
//     value: 1,
//     func1: function(){
//         const that = this;
//         this.value += 1;
//         console.log(`func1() called. this. value : `+ this.value);
//         func2 = function(){
//             that.value += 1;
//             console.log(`func2() called. this. value : `+ that.value);
//             func3 = function(){
//                 that.value += 1;
//                 console.log(`func3() called. this. value : `+ that.value);
//             }
//             func3();
//         }
//         func2();
//     }
// };
// myObject.func1(); 



