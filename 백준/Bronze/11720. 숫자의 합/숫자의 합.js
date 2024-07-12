const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n");
const N = input[0];
const numbers = input[1].split("").map(Number);

let answer = 0;
for(let i = 0; i < N; i++){
    answer += numbers[i];
}

console.log(answer);
