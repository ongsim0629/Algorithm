const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

// 그래프 생성
for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
}

function getMaxIndependentSetSize(start) {
    let nodes = [];
    let queue = [start];
    visited[start] = true;
    
    while (queue.length) {
        const node = queue.pop();
        nodes.push(node);
        for (const next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
    
    const len = nodes.length;
    if (len === 1) return 1; // 단일 정점
    
    // dp[i][0] = i번째 정점을 선택하지 않은 최대 독립 집합 크기
    // dp[i][1] = i번째 정점을 선택한 최대 독립 집합 크기
    let dp = Array.from({ length: len }, () => [0, 0]);
    
    dp[0][1] = 1; // 첫 번째 정점 선택
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = dp[i - 1][0] + 1;
    }
    
    return Math.max(dp[len - 1][0], dp[len - 1][1]);
}

let result = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        result += getMaxIndependentSetSize(i);
    }
}

console.log(result);
