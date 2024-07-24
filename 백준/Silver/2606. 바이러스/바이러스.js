const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const num_of_computer = input[0][0];
const connected_pair = input[1][0];
const pairs = input.slice(2);

// 그래프 그리기 시작 -> 0 ~ 7의 인덱스를 가질 수 있게 함
let graph = Array.from({ length: num_of_computer + 1 }, () => []);
for (let i = 0; i < connected_pair; i++) {
    let start = pairs[i][0];
    let end = pairs[i][1];
    graph[start].push(end);
    graph[end].push(start);
}

// dfs 시작
let visited = Array.from({ length: num_of_computer + 1 }, () => false);
let answer = 0;

function dfs(start_node) {
    // 시작 노드를 방문 표시
    visited[start_node] = true;

    // 시작 노드와 연결된 노드들에 대해 반복 (1 -> 2, 5 등)
    for (let end of graph[start_node]) {
        // 연결된 노드가 방문되지 않았다면 방문 표시하고 answer 증가
        if (!visited[end]) {
            visited[end] = true;
            answer++;
            // 연결된 노드에 대해 재귀적으로 dfs 수행
            dfs(end);
        }
    }
};

dfs(1);

// result는 감염된 컴퓨터 수 -> 1번 컴퓨터에 의해서 감염된 컴퓨터의 수이므로 -1
console.log(answer);