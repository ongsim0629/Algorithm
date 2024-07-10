const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const M = input[0][1];
const test_case1 = input.slice(1,N+1);
const test_case2 = input.slice(N+1);

function plus_matrix(arr1, arr2){
    for(let i = 0; i < N; i++){
        let answer = '';
        for(let j = 0; j < M; j++){
            answer += arr1[i][j] + arr2[i][j] + " ";
        }
        console.log(answer);
    }
}

plus_matrix(test_case1, test_case2)