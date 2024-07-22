const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el)=>el.trim().split(","));
// 행 개수
const N = Number(input[0][0].split(" ")[0]);
// 열 개수
const M = Number(input[0][0].split(" ")[1]);
const test_case = input.slice(1);

// 모범 체스판 1
const chess_1 = [ 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW' ]
// 모범 체스판 2
const chess_2 = [ 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW',  'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB' ]

// 
function check_board(arr){
    let count_list = [];
    // 모범 체스판 1에 대해서 테스트 케이스와 비교
    for(let i = 0; i + 7 <= M; i++){
        // 보드를 8*8짜리의 타겟 행렬로 자른다. (아래로 이동한 후 -> 오른쪽으로 이동)
        for(let j = 0; j + 7 < N; j++){
            let target_arr = [];
            for(let k = 0; k < 8; k++){
                target_arr.push(test_case[Number(j+k)][0].slice(i,i+8));
            }
            // 타겟 행렬과 모범 체스판 1을 하나하나 비교한다 -> 모범 체스판 1과 다르면 count +1
            let count = 0;
            for(let l = 0; l < 8; l++){
                for(let m = 0; m < 8; m++){
                    if(target_arr[l].charAt(m)!=chess_1[l].charAt(m)){
                        count++;
                    }
                }
            }
            // 모범 체스판 1과 타겟 행렬 사이의 비교가 끝나면 카운트 리스트에 해당 타겟 행렬의 카운트 삽입
            count_list.push(count);
        }
    }
    // 모범 체스판 2에 대해서 테스트 케이스와 비교
    for(let i = 0; i + 7 <= M; i++){
        // 보드를 8*8짜리의 타겟 행렬로 자른다. (아래로 이동한 후 -> 오른쪽으로 이동)
        for(let j = 0; j + 7 < N; j++){
            let target_arr = [];
            for(let k = 0; k < 8; k++){
                target_arr.push(test_case[Number(j+k)][0].slice(i,i+8));
            }
            // 타겟 행렬과 모범 체스판 2를 하나하나 비교한다 -> 모범 체스판 2와 다르면 count +1
            let count = 0;
            for(let l = 0; l < 8; l++){
                for(let m = 0; m < 8; m++){
                    if(target_arr[l].charAt(m)!=chess_2[l].charAt(m)){
                        count++;
                    }
                }
            }
            // 모범 체스판 2와 타겟 행렬 사이의 비교가 끝나면 카운트 리스트에 해당 타겟 행렬의 카운트 삽입
            count_list.push(count);
        }
    }
    // 카운트 리스트의 최소값이 정답이다.
    let answer = Math.min.apply(null, count_list);
    return answer;
}

let answer = check_board(test_case);
console.log(answer);
