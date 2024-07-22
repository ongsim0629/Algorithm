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

function check_board(arr){
    let count_list = [];
    for(let i = 0; i + 7 <= M; i++){
        for(let j = 0; j + 7 < N; j++){
            let target_arr = [];
            for(let k = 0; k < 8; k++){
                target_arr.push(test_case[Number(j+k)][0].slice(i,i+8));
            }
            let count = 0;
            for(let l = 0; l < 8; l++){
                for(let m = 0; m < 8; m++){
                    if(target_arr[l].charAt(m)!=chess_1[l].charAt(m)){
                        count++;
                    }
                }
            }
            count_list.push(count);
        }
    }
    for(let i = 0; i + 7 <= M; i++){
        for(let j = 0; j + 7 < N; j++){
            let target_arr = [];
            for(let k = 0; k < 8; k++){
                target_arr.push(test_case[Number(j+k)][0].slice(i,i+8));
            }
            let count = 0;
            for(let l = 0; l < 8; l++){
                for(let m = 0; m < 8; m++){
                    if(target_arr[l].charAt(m)!=chess_2[l].charAt(m)){
                        count++;
                    }
                }
            }
            count_list.push(count);
        }
    }
    let answer = Math.min.apply(null, count_list);
    return answer;
}

let answer = check_board(test_case);
console.log(answer);