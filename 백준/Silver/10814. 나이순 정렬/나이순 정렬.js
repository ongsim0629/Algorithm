const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el)=>el.trim().split(" "));
const N = Number(input[0])
const members = input.slice(1);
let sorted_members = members.sort((a,b)=> a[0] - b[0]);

for(let i = 0; i < N; i++){
    console.log(sorted_members[i][0] + " " + sorted_members[i][1]);
}

