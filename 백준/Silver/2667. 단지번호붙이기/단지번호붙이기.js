const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : '알고리즘/example.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const test_case = input.slice(1).map((line) => line.split('').map(Number));

const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function bfs(arr) {
    // bfs를 실행할 때 필요한 큐 -> (0, 0)의 위치에서 맨 처음 시작
    let isVisited = Array.from({ length: N }, () => Array(N).fill(false)); // 방문 여부를 저장하는 배열
    let complex_sizes = []; // 각 단지의 크기를 저장할 배열

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // 좌표의 위치가 방문하지 않은 곳이면서 집이 있는 곳이면 -> bfs 시작
            if (arr[i][j] === 1 && !isVisited[i][j]) {
                let queue = [[i, j]]; // BFS 탐색을 위한 큐 초기화
                let count_house = 0; // 집의 개수 세기 위한 변수

                while (queue.length !== 0) {
                    let [cur_y, cur_x] = queue.shift(); // 큐의 첫 번째 요소 꺼내기

                    // 큐의 요소가 이미 처리된 상태이면 continue
                    if (isVisited[cur_y][cur_x]) {
                        continue;
                    }

                    count_house++; // 집의 개수 증가
                    isVisited[cur_y][cur_x] = true; // 방문 처리

                    // 연결된 좌표에 대해서 집이 있는 지 확인하기 위한 연결된 좌표 확인
                    for (let k = 0; k < 4; k++) {
                        let next_y = cur_y + move[k][0];
                        let next_x = cur_x + move[k][1];

                        // 다음 좌표가 배열 벗어나지 않고 1이면서 방문하지 않은 곳일 경우 큐에 삽입
                        if (next_x >= 0 && next_x < N && next_y >= 0 && next_y < N && arr[next_y][next_x] === 1 && !isVisited[next_y][next_x]) {
                            queue.push([next_y, next_x]);
                        }
                    }
                }
                // while문이 끝나면 == queue가 빈다면 == 연결된 집을 모두 탐색했다면 => 단지 수 +1
                complex_sizes.push(count_house); // 단지의 크기를 저장
            }
        }
    }
    console.log(complex_sizes.length);  // 단지 수 출력
    console.log(complex_sizes.sort((a, b) => a - b).join('\n'));  // 각 단지의 집 수 오름차순으로 출력
}

bfs(test_case);
