const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(line => line.trim());;
const T = input[0];
const test_case = [...input.slice(1)];

function print(arr) {
    for(let i = 0; i < T; i++){
        let answer = '';
        answer += arr[i].at(0)+arr[i].at(-1);
        console.log(answer);
    }
  }
  
print(test_case)