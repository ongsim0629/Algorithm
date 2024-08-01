const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const M = input[0][1];
const num_list = input[1].sort((a, b) => a - b);

let state = new Array(M).fill(0);
let isVisited = new Array(N).fill(false);

function backtracking(k, start) {
    let answer = "";

    if (k == M) {
        for (let i = 0; i < M; i++) {
            answer += state[i] + " ";
        }
        console.log(answer);
    }

    let lastUsed = -1;
    for (let i = start; i < N; i++) {
        if (!isVisited[i] && num_list[i] !== lastUsed) {
            state[k] = num_list[i];
            isVisited[i] = true;
            lastUsed = num_list[i];  // 현재 숫자를 lastUsed에 기록
            backtracking(k + 1, i+1);
            isVisited[i] = false;
        }
    }
}

backtracking(0, 0);
