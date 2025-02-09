const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => new Set());
const degree = Array(N + 1).fill(0);
const selected = new Set();
const visited = new Set();

// 그래프 생성 및 간선 개수 계산
for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
    degree[u]++;
    degree[v]++;
}

// 정점을 간선 개수 기준으로 정렬 (오름차순)
const nodes = Array.from({ length: N }, (_, i) => i + 1).sort((a, b) => degree[a] - degree[b]);

// 탐욕적 선택
for (const node of nodes) {
    if (visited.has(node)) continue; // 이미 처리된 정점이면 패스
    
    selected.add(node); // 선택
    visited.add(node);
    
    // 연결된 노드들 방문 처리
    for (const neighbor of graph[node]) {
        visited.add(neighbor);
    }
}

console.log(selected.size);
