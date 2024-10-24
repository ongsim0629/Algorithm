const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

const A = input[0][0];
const B = input[0][1];

const arr_A = new Set(input[1]);
const arr_B = new Set(input[2]);

const new_A = [...arr_A].filter((e) => !(arr_B.has(e)))
const new_B = [...arr_B].filter((e) => !(arr_A.has(e)))

console.log(new_A.length + new_B.length);