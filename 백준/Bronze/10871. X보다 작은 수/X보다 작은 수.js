const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const X = input[0][1];
const test_case = [...input[1]];
let answer = '';

function smaller_X(arr){
    for(let i = 0; i < N; i++){
        if(arr[i] < X){
            answer += arr[i] + " ";
        }
    }
    console.log(answer);
}

smaller_X(test_case)
