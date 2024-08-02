const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const stats = input.slice(1);

let isVisited = new Array(N).fill(false);
let minDiff = 400000;

// 먼저 팀을 나누고 시작 -> isVisited true끼리 팀, false끼리 팀
function backtracking(k, start) {
    // N/2명이 선택됐으면 -> 능력치 차이 계산 시작
    if (k == N / 2) {
        soccer_stats();
    }

    // 백트랙킹으로 팀원 선정 
    for (let i = start; i < N; i++) {
        if (!isVisited[i]) {
            isVisited[i] = true;
            backtracking(k + 1, i + 1);
            isVisited[i] = false;
        }
    }
}

// 지금 상황 -> N/2 명은 isVisited true임
function soccer_stats() {
    let startTeam = [];
    let linkTeam = [];
    let start = 0;
    let link = 0;

    for (let i = 0; i < N; i++) {
        if (isVisited[i]) {
            startTeam.push(i);
        } else {
            linkTeam.push(i);
        }
    }
    
    // 계산 시작
    for (let i = 0; i < N/2; i++) {
        for (let j = i + 1; j < N/2; j++) {
            start += stats[startTeam[i]][startTeam[j]] + stats[startTeam[j]][startTeam[i]];
            link += stats[linkTeam[i]][linkTeam[j]] + stats[linkTeam[j]][linkTeam[i]];
        }
    }

    // 두 팀의 점수차 절댓값 -> 그거랑 현재의 최소 점수차 비교해서 더 작은 것이 minDiff로 다시 설정
    let diff = Math.abs(start - link);
    minDiff = Math.min(minDiff, diff);
}

backtracking(0, 0);
console.log(minDiff);
