const fs = require('fs');
const y = fs.readFileSync(0,'utf-8').trim();
const yy = parseInt(y)-543;
console.log(yy);