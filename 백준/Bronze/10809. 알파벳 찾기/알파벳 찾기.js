const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim();
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
answer = '';

[...alphabet].map(v => {answer += input.indexOf(v) + ' ';})

console.log(answer)
