const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result;
if (input.startsWith('0x') || input.startsWith('0X')) {
    // 16진수
    result = parseInt(input, 16);
} else if (input.startsWith('0') && input !== '0') {
    // 8진수
    result = parseInt(input, 8);
} else {
    // 10진수
    result = parseInt(input, 10);
}

console.log(result);