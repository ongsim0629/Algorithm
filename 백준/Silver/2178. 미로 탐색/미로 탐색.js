const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n");
// 행, 열
const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.trim().split("").map(Number));
// 인접 방향 순서대로 상, 하, 좌, 우로 1칸 이동할 수 있게 함
const move = [[0, 1], [0, -1], [-1, 0], [1, 0]];

// bfs 시작
function bfs(x, y) {
    // 이동 칸 수를 저장할 배열을 만듦
    let distance = Array.from({ length: N }, () => Array(M).fill(0));
    let queue = [[y, x]];
    distance[y][x] = 1;

    while (queue.length !== 0) {
        // 큐의 첫 번째 요소 -> 현재의 위치 [y, x]
        const [now_y, now_x] = queue.shift();

        // 도착 위치에 도달하면 거리 반환
        if (now_y === N - 1 && now_x === M - 1) {
            return distance[now_y][now_x];
        }

        for (let i = 0; i < 4; i++) {
            // 현재 위치에서의 상하좌우 적용해서 다음 위치 탐색함
            let next_y = now_y + move[i][0];
            let next_x = now_x + move[i][1];

            // 다음 위치가 미로 안 벗어나고 값이 1이면 -> 큐에 그 위치 집어 넣고 현재에서 +1 된 거리를 해당하는 거리 배열에 저장
            if (next_x >= 0 && next_x < M && next_y >= 0 && next_y < N && maze[next_y][next_x] === 1 && distance[next_y][next_x] === 0) {
                queue.push([next_y, next_x]);
                distance[next_y][next_x] = distance[now_y][now_x] + 1;
            }
        }
    }
}

const result = bfs(0, 0);
console.log(result);