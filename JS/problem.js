// 프로그래머스 

// k번째 수
// function solution(array, commands) {
//     var answer = [];
//     for (let i = 0; i < commands.length; i++) {
//         let arr = array.slice(commands[i][0] - 1, commands[i][1]);
//         arr.sort(function (a, b) {
//             return a - b;
//         });
//         answer[i] = arr[commands[i][2] - 1];
//     }
//     return answer;
// }

// 제일 작은 수 제거하기
// function solution(participant, completion) {
//     var answer = [];
//     if (array.length === 1) return [-1];
//     array.splice(arr.indexOf(Math.min(...arr)), 1);
//     return arr;
// }

// 완주하지 못한 선수
// function solution(participant, completion) {
//     const total = participant.length;
//     var answer = '';

//     participant.sort();
//     completion.sort();
//     for (let i = 0; i < total; i++) {
//         if (participant[i] !== completion[i]) {
//             answer = participant[i];
//             return answer;
//         }
//     }
// }

// 같은 숫자는 싫어
function solution(arr) {
     var answer = [];
     return arr.filter((val, index) => val !== arr[index + 1]);
}