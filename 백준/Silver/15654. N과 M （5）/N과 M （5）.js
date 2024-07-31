const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const M = input[0][1];
const num_list = input[1].sort((a, b) => a - b);

let state = new Array(M).fill(0);
let isVisited = new Array(N).fill(false);

function backtracking(k, arr) {
    let answer = "";

    // state의 함수가 모두 찼을 때 -> M개 선택 완료한 경우 -> state 출력
    if (k == M) {
        for (let i = 0; i < M; i++) {
            answer += state[i] + " "
        }
        console.log(answer);
    }

    else {
        for (let i = 0; i < N; i++) {
            // arr의 요소를 사용하지 않은 경우에만 사용 -> 중복 x
            if (!isVisited[i]) {
                state[k] = arr[i];
                isVisited[i] = true;
                backtracking(k + 1, arr);
                isVisited[i] = false;
            }
        }
    }

}


backtracking(0, num_list);