const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
let answer_num = 0;
let answer_str = '';

answer_num += input[0] + input[1] - input[2];
answer_str += input[0].toString() + input[1].toString() - input[2].toString();

console.log(answer_num);
console.log(answer_str);