// 내부 함수
console.log(`내부 함수`);

function parent1(){
  const a = 100;
  const b = 200;

  function child1(){
    const b = 300;
    console.log(a); // 부모함수의 변수에 접근이 가능하다.
    console.log(b);  
  }
  child1();
}
parent1();
// child1(); 불가능

// 함수외부에서 특정 함수 스코프 안에 선언된 내부 함수 호출하기
// (부모 함수에서 내부 함수를 외부로 리턴)
function parent2(){
  const a = 100;
  const child = function(){
    console.log(a);
  }
  return child; // 내부 함수를 리턴
}
const inner = parent2();
inner();
// inner()와 같은 함수를 클로저라 한다.
