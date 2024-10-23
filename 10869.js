const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B)); //Math.floor() 소수점 이하를 버리고 정수 부분만 반환
console.log(A % B);