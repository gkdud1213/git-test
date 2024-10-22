const fs = require('fs');
// fs (파일시스템모듈)을 요청하여 불러옴
// 읽거나 쓰는 작업을 가능하게 함
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);
// fs.readFileSync(0, 'utf-8') : 0은 표준입력, utf-8로 인코딩하여 파일을 동기적으로 읽음
// .trim() : 앞뒤 공백 제거
// .split(' ') : 공백을 기준으로 배열화
// .map(Number) : 배열에 있는 각 문자열을 숫자로 변환
console.log(A + B);