const arr1 = ['zero','one', 'two','three'];
console.log(arr1.length);
delete arr1[2];
console.log(arr1);
console.log(arr1.length);
// delete는 값만 제거하므로 프로퍼티는 그대로이고 length값도 변하지 않는다.

const arr2 = ['one','two','three','four'];
arr2.splice(2,1);
console.log(arr2);
console.log(arr2.length);
// splice는 프로퍼티를 완전히 제거하므로 length값도 줄어든다.
// splice(시작위치(인덱스), 삭제할 개수, 삭제한 위치에 추가할 요소(생략가능))
// 시작위치(인덱스)는 0부터 시작한다.
// 삭제할 개수는 삭제할 개수만큼 삭제한다.
// 삭제한 위치에 추가할 요소(생략가능)는 삭제한 위치에 추가한다.
// 삭제한 위치에 추가할 요소가 없으면 undefined가 들어간다.
// 삭제한 위치에 추가할 요소가 여러개일 경우에는 쉼표로 구분한다.
