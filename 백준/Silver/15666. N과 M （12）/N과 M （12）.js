const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const M = input[0][1];
const num_list = input[1].sort((a, b) => a - b);

let state = new Array(M).fill(0);
let answer = "";

function backtracking(k, start) {

    if (k == M) {
        answer += state.join(" ") + "\n";
        return;
    }

    else {
        let lastUsed = -1;
        for (let i = start; i < N; i++) {
            if (num_list[i] !== lastUsed) {
                state[k] = num_list[i];
                lastUsed = num_list[i];  // 현재 숫자를 lastUsed에 기록
                backtracking(k + 1, i);
            }
        }
    }
}

backtracking(0, 0);
console.log(answer);
