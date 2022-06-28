const objA = {
  val : 40
}
const objB = objA;
// objB 변수를 objA 변수가 가리키는 객체를 가리키도록 한다.

console.log(objA.val);
console.log(objB.val);

objB.val = 50;
console.log(objA.val);
console.log(objB.val);
