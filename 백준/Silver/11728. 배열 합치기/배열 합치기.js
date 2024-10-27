const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

const N = input[0][0];
const M = input[0][1];

let result = [];
let pointer_A = 0;
let pointer_B = 0;
let flag = false;

while (pointer_A < N && pointer_B < M) {
    if (input[1][pointer_A] <= input[2][pointer_B]) {
        result.push(input[1][pointer_A]);
        pointer_A++;
    } else {
        result.push(input[2][pointer_B]);
        pointer_B++;
    }
}

// 남은 요소들을 처리
while (pointer_A < N) {
    result.push(input[1][pointer_A]);
    pointer_A++;
}

while (pointer_B < M) {
    result.push(input[2][pointer_B]);
    pointer_B++;
}

console.log(result.join(" "));