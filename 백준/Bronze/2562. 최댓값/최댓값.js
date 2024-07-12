const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);

let answer = Math.max.apply(null, input);
index = input.indexOf(answer)+1;

console.log(answer);
console.log(index);