const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
const N = input[0];
const list = input.slice(1);
list.sort((a,b)=>a-b);
let answer_list = [...new Set(list)];

let answer ='';

for(let i in answer_list){
    if (i == N -1){
        answer += answer_list[i];
        break;
    }
   answer += answer_list[i]+"\n"
}

console.log(answer);