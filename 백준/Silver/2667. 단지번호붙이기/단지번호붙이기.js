const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : '알고리즘/example.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const test_case = input.slice(1).map((line) => line.split('').map(Number));

const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function bfs(arr) {
    let isVisited = Array.from({ length: N }, () => Array(N).fill(false));
    let complex_sizes = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 1 && !isVisited[i][j]) {
                let queue = [[i, j]];
                let count_house = 0;

                while (queue.length !== 0) {
                    let [cur_y, cur_x] = queue.shift();

                    if (isVisited[cur_y][cur_x]) {
                        continue;
                    }

                    count_house++;
                    isVisited[cur_y][cur_x] = true;

                    for (let k = 0; k < 4; k++) {
                        let next_y = cur_y + move[k][0];
                        let next_x = cur_x + move[k][1];

                        if (next_x >= 0 && next_x < N && next_y >= 0 && next_y < N && arr[next_y][next_x] === 1 && !isVisited[next_y][next_x]) {
                            queue.push([next_y, next_x]);
                        }
                    }
                }
                complex_sizes.push(count_house);
            }
        }
    }
    console.log(complex_sizes.length);  // 단지 수 출력
    console.log(complex_sizes.sort((a, b) => a - b).join('\n'));  // 각 단지의 집 수 오름차순으로 출력
}

bfs(test_case);
