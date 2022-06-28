// 배열 길이
const arr1 = [];
console.log(arr1.length);

arr1[0] = 0;
arr1[1] = 1;
arr1[2] = 2;
arr1[100] = 100;
console.log(arr1.length);

// 배열 길이 예제
const arr2 = [0,1,2];
console.log(arr2.length);

arr2.length = 5;
console.log(arr2.length);
console.log(arr2);

arr2.length = 2;
console.log(arr2);
console.log(arr2.length);
console.log(arr2[2]);
