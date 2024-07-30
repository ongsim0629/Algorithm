const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);
const N = input[0];
const M = input[1];

let state = new Array(M).fill(0);
let isVisited = new Array(N).fill(false);

function backtracking(k){
    let answer = "";

    // state의 함수가 모두 찼을 때 -> M개 선택 완료한 경우 -> state 출력
    if(k == M){
        for(let i = 0; i < M; i++){
            answer += state[i] + " "
        }
        console.log(answer);
    }

    for (let i = 1; i <= N; i++) {
        // 만약에 N까지의 숫자 i를 방문하지 않았다면 (사용하지 않았다면)
        if (!isVisited[i]) {
            // 해당 i를 state에 사용
            state[k] = i;
            // 해당 i를 사용했음을 표시 -> 사용한 i는 state에 다시 사용하지 못하기 때문에
            isVisited[i] = true;
            // 재귀 (다음 수 선택)
            backtracking(k+1);
            // 재귀로 해당하는 경우 다 확인했으니까 이제 i 다시 초기화해줌
            isVisited[i] = false;
        }
    }
}


backtracking(0);