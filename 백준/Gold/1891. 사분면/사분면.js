const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" "));

// 조각 번호의 자릿수
const d = parseInt(input[0][0], 10);
// 조각 번호 (문자열로 처리)
const num = input[0][1];
// 이동 방향
const xMove = parseInt(input[1][0], 10);
const yMove = parseInt(input[1][1], 10);

// 조각 번호 -> 좌표
function cal_coordinate(d, num) {
    let x = 0, y = 0;
    let pow = 2 ** (d - 1);

    for (let i = 0; i < d; i++) {
        let target = parseInt(num[i], 10);
        if (target === 1) {
            x += pow;
            y += pow;
        } else if (target === 2) {
            y += pow;
        } else if (target === 4) {
            x += pow;
        }
        pow /= 2;
    }
    return [x, y];
}

// 좌표 -> 조각 번호
function cal_quadrant(d, x, y) {
    let num = '';
    let criteria = 2 ** (d - 1);
    for (let i = 0; i < d; i++) {
        if (x >= criteria && y >= criteria) {
            num += '1';
            x -= criteria;
            y -= criteria;
        } else if (x < criteria && y >= criteria) {
            num += '2';
            y -= criteria;
        } else if (x < criteria && y < criteria) {
            num += '3';
        } else if (x >= criteria && y < criteria) {
            num += '4';
            x -= criteria;
        }
        criteria /= 2;
    }
    return num;
}

function move(d, num, xMove, yMove) {
    let [x, y] = cal_coordinate(d, num);
    let size = 2 ** d;
    x += xMove;
    y += yMove;
    if (x < 0 || x >= size || y < 0 || y >= size) {
        console.log(-1);
    } else {
        let result = cal_quadrant(d, x, y);
        console.log(result);
    }
}

move(d, num, xMove, yMove);
