const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const a = Number(input[0]); // 가로
const b = Number(input[1]); // 세로

const line = '*'.repeat(a); // 가로 길이만큼 별
let out = '';

for (let i = 0; i < b; i++) {
  out += line + '\n';
}

console.log(out);