const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
const N = input[0][0];
const coordi = input.slice(1);
coordi.sort((a,b) => a[0]-b[0] || a[1]-b[1]);
let answer ='';

for(let i = 0; i < coordi.length; i++){
    answer += coordi[i][0] + " "+ coordi[i][1] + "\n";
}

console.log(answer)