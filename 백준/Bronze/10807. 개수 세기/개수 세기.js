const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const V = input[2][0];
const test_case = [...input[1]]
let count = 0;

function count_V(arr){
    for(let i = 0; i < N; i++){
        if(arr[i] == V){
            count += 1;
        }
    }
    console.log(count);
}

count_V(test_case)
