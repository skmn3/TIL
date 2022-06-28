let x = 3;
let y = 4;
const add = new Function('x' + 'y', `return ${x} + ${y}`);
console.log(add());
