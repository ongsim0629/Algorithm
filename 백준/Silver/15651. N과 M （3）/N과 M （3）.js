const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);
const N = input[0];
const M = input[1];

let state = new Array(M).fill(0);
let result = "";

function backtracking(k) {
    if (k == M) {
        result += state.join(" ") + "\n";
        return;
    }

    for (let i = 1; i <= N; i++) {
        state[k] = i;
        backtracking(k + 1);
    }
}

backtracking(0);

console.log(result);