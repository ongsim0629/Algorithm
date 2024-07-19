const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(line => line.trim());
const N = Number(input[0]);
// 중복 제거
const list = [...new Set(input.slice(1))];

// 문자열 길이로 먼저 정렬하고, 문자열이 같다면 localeCompare를 하게 된다.
list.sort( (a,b)=> a.length-b.length || a.localeCompare(b) );

for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}