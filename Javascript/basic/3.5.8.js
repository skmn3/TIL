// 1. forEach() 주어진 함수를 배열 요소 각각에 대해 실행합니다.
console.log(`1. forEach() 주어진 함수를 배열 요소 각각에 대해 실행합니다.`);
const arr1 = [1,2,3,4,5];
let result1 = 0;
const fc = (element) => {
  console.log(element);
}
arr1.forEach(fc);
arr1.forEach(e=>{
  console.log(e);
});
console.log(`sum: ${result1}`);
console.log();

// 2. indexOf() 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
console.log(`2. indexOf() 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.`);
const arr2 = ['apple', 'pear', 'orange', 'straqberry'];
console.log(arr2.indexOf('apple'));
console.log(arr2.indexOf('orange'));
console.log(arr2.indexOf('banana'));
console.log();

// 3. map() 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
console.log(`3. map() 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.`)
const arr3 = [1,2,3,4,5,6,7];
const arr4 = arr1.map(e => e*e);
console.log(arr4);
console.log();

// 4. concat() 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
console.log(`4. concat() 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. `);
const arr5 = ['a', 'b', 'c'];
const arr6 = ['d', 'e', 'f'];
const result2 = arr5.concat(arr6);
console.log(result2);
console.log();

// 5. filter() 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
console.log(`5. filter() 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.`);
const obj = [
  {
    id:1,
    done: true,
  },
  {
    id:2,
    done: false,
  },
  {
    id:3,
    done: false,
  }
];
const who = obj.filter(e => e.done === false);
console.log(who);
console.log();

// 6. reduce() 배열의 모든 요소를 하나의 값으로 합치는 함수를 실행합니다.
console.log(`6. reduce() 배열의 모든 요소를 하나의 값으로 합치는 함수를 실행합니다.`);
const arr7 = [1,2,3,4,5];
const result3 = arr7.reduce((acc, cur) =>{ acc += cur});
console.log(result3);
