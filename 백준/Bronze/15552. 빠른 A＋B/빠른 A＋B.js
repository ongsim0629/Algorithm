const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const test_case = input.slice(1);
let answer ='';

function plus(arr){
    for(let i = 0; i < N; i++){
        answer += arr[i][0] + arr[i][1] + "\n";
    }
}

plus(test_case)
console.log(answer);