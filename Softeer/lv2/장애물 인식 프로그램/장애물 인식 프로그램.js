const fs = require('fs');
const input = fs.readFileSync('/dev/stdin','utf8').trim().split('\n');
const N = Number(input[0]);
const map = input.slice(1,N+1).map(x=>x.split('').map(Number));
let visited = Array(N).fill().map(()=>Array(N).fill(0));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let count = 0;
let ans = [];

function dfs(x, y) {
    let cnt = 1;  // 현재 단지의 집의 수
    visited[x][y] = 1;
    
    // 4방향 탐색
    for(let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        
        // 범위 체크 및 방문하지 않은 집 체크
        if(nx >= 0 && nx < N && ny >= 0 && ny < N && 
           map[nx][ny] === 1 && visited[nx][ny] === 0) {
            cnt += dfs(nx, ny);  // 연결된 집의 수를 더함
        }
    }
    
    return cnt;
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(map[i][j] === 1 && visited[i][j] === 0) {
            ans.push(dfs(i, j));
            count++;
        }
    }
}

console.log(count);
const answer = ans.sort((a,b)=>a-b);
for (let i = 0; i<answer.length; i++){
    console.log(answer[i]);
}
