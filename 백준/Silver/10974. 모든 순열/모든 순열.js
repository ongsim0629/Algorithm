const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim();

const N = input;
const visited = Array(N).fill(false);
let state = Array(N).fill(0);


function backtracking(k) {
    let answer = "";
    // state가 꽉 찼다
    if (k === N) {
        for(let i = 0; i<N; i++){
            answer += state[i] + ' ';
        }
        console.log(answer);
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            state[k] = i;
            visited[i] = true;
            backtracking(k + 1);
            visited[i] = false;
        }
    }
}

backtracking(0);