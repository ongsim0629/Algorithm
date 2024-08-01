const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const M = input[0][1];
const num_list = input[1].sort((a, b) => a - b);

let state = new Array(M).fill(0);

function backtracking(k, start) {
    let answer = "";

    // state의 함수가 모두 찼을 때 -> M개 선택 완료한 경우 -> state 출력
    if (k == M) {
        for (let i = 0; i < M; i++) {
            answer += state[i] + " "
        }
        console.log(answer);
    }
    else {
        for (let i = start; i < N; i++) {
            // 해당 i를 state에 사용
            state[k] = num_list[i];
            // start를 i+1로 설정하여 다음 숫자부터 선택하도록 함
            backtracking(k + 1, i);
        }
    }

}


backtracking(0,0);