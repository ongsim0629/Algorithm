const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim().split("\n").map((el) => el.split(" "));

let N = input[0][0];
let number = input[1][0];

let arr = number.toString().split('').map(Number);

let sum = 0;
for (let i = 0; i < N; i++){
    sum += arr[i]
}
console.log(sum);