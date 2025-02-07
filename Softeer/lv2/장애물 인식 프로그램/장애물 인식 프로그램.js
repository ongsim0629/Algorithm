const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = Number(input[0]);
const map = input.slice(1,N+1).map(x=>x.split('').map(Number));
let visited = Array(N).fill().map(()=>Array(N).fill(false));

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

let answer = [];

// 재귀 함수 -> 장애물에서 상하좌우 탐색하며 주변에 장애물 없을 때 까지
function dfs(x,y){
    let obstacle = 1;
    visited[x][y] = true;

    for (let i = 0; i < 4; i++){
        const new_x = x+dx[i];
        const new_y = y+dy[i];
        if(new_x >= 0 && new_x < N && new_y >= 0 && new_y < N && map[new_x][new_y] === 1 && visited[new_x][new_y] === false){
            obstacle += dfs(new_x,new_y);
        }
    }
    return obstacle;
}

for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
        if(map[i][j] === 1 && visited[i][j] === false){
            answer.push(dfs(i,j));
        }
    }
}

console.log(answer.length);
const sorted_answer = answer.sort((a,b) => a-b);
for (ans of sorted_answer){
    console.log(ans);
}
