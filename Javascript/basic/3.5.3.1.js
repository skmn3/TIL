// 배열의 push 메서드
const arr = ['zero','one','two'];//length = 3

arr.push('three');
console.log(arr);
console.log(arr.length);//length = 4

arr.length = 5;
arr.push('four');//length = 6
console.log(arr);

console.log(arr.length);
// push메서드는 length가 갖는 값의 인덱스에 추가하는 메서드다.
// length가 갖는 값의 인덱스는 배열의 요소의 개수를 의미한다.
// 즉, 배열의 요소의 개수를 의미한다.
// 즉, 배열의 길이를 의미한다.
