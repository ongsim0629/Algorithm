const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

// n = 기둥의 개수
let n = input[0][0];
// 기둥 위치 리스트, 위치순으로 오름차순 정렬
let list = input.slice(1);
list.sort((a, b) => a[0] - b[0]);

// list의 첫 y값 저장 -> 지금까지의 최대 y값을 저장할 예정
let a = list[0][1];
let max = Math.max(...list.map((el) => el[1]));
let max_idx = list.map((el) => el[1]).indexOf(max);

// 일단 색종이처럼 풀어보겠음 가보자고
// 기둥의 최대 x 좌표를 구해서 그에 맞는 크기의 배열 생성
let maxX = Math.max(...list.map(el => el[0])) + 1;
let space = Array.from(Array(maxX), () => new Array(max).fill(0));

// 기둥 없지만 공간이 되어야 하는 부분 색칠해주기 (왼쪽 부분 + 높이 최고인 부분도 색칠 완)
for (let idx = 0; idx <= max_idx; idx++) {
    // y 값이 a 값보다 작거나 같은 경우
    if (list[idx][1] <= a) {
        for (let i = list[idx][0]; i < (idx < max_idx ? list[idx + 1][0] : list[idx][0] + 1); i++) {
            for (let j = 0; j < a; j++) {
                space[i][j] = 1;
            }
        }
    } else { // 이전의 y 값보다 큰 경우
        a = list[idx][1];
        for (let i = list[idx][0]; i < (idx < max_idx ? list[idx + 1][0] : list[idx][0] + 1); i++) {
            for (let j = 0; j < a; j++) {
                space[i][j] = 1;
            }
        }
    }
}

a = list.at(-1)[1];
// 기둥 없지만 공간이 되어야 하는 부분 색칠해주기 (오른쪽 부분 높이 최고 직전까지)
for (let idx = n - 1; idx > max_idx; idx--) {
    // 이전의 y 값보다 작거나 같은 경우
    if (list[idx][1] <= a) {
        for (let i = list[idx][0]; i > (idx > max_idx ? list[idx - 1][0] : list[idx][0] - 1); i--) {
            for (let j = 0; j < a; j++) {
                space[i][j] = 1;
            }
        }
    } else { // 이전의 y 값보다 큰 경우
        a = list[idx][1];
        for (let i = list[idx][0]; i > (idx > max_idx ? list[idx - 1][0] : list[idx][0] - 1); i--) {
            for (let j = 0; j < a; j++) {
                space[i][j] = 1;
            }
        }
    }
}

// 1로 처리된 부분 count해서 넓이 계산하기
let answer = 0;
for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < max; j++) {
        if (space[i][j] === 1) {
            answer++;
        }
    }
}

console.log(answer);
