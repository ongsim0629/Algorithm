const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const numbers = [...input[1]];

console.log(Math.min.apply(null,numbers), Math.max.apply(null, numbers))