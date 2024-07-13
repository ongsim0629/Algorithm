const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
let arr = [];

for(let i = 0; i < input.length; i++){
    arr.push(input[i]%42);
}

let result = [...new Set(arr)];

console.log(result.length);