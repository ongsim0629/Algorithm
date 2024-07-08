// input 처리 [N,M]
const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);
// 세로
const N = input[0];
// 가로
const M = input[1];

// N, M 엄청 큼 -> 브루트 포스트는 아닐 듯
let answer = 1;

function sick_knight(x,y){
    // N이 1인 경우 병든 나이트는 움직일 수 없다
    if(x == 1){
    }
    // N이 2인 경우 -> 2번, 4번 행동만 가능함
    else if(x == 2){
        // M이 3 이하이면 -> 2번, 4번 행동도 불가능 -> 움직일 수 없다
        if(y < 3){
        }
        // 3 <= M < 7인 경우 -> M 갈 수 있는 만큼 움직일 수 있다.
        else if(y >= 3 && y < 7){
            answer += parseInt((y-1)/2);
        }
        // M >= 7인 경우 -> 이동 제한에 의해서 4번 까지만 이동할 수 있다.
        else{
            answer = 4;
        }
    }
    // N이 3이상인 경우 -> 1번, 2번, 3번, 4번 행동이 가능함
    else {
        // M = 1이면 -> 이동할 수 없다.
        if(y == 1){
        }
        // 
        else if(1 < y && y < 4){
            answer = y;

        }
        // 이동제한에 의해서 최대가 무조건 4이다.
        else if(4 <= y && y < 7){
            answer = 4;
        }
        else{
            answer = y-2;
        }
    }
    console.log(answer);
}

sick_knight(N,M);