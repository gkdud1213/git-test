const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim().split('\n'); // 줄바꿈 기준으로 배열을 분리
const A = input[0];
const B = input[1];

const A1 = Math.floor(A/100); // Math.floor 소수점 버리고 내림하여 정수 부분 반환
const A2 = Math.floor((A-A1)/10);
const A3 = A-A1-A2;

const B1 = Math.floor(B/100);
const B2 = Math.floor((B-B1)/10);
const B3 = B-B1-B2;

