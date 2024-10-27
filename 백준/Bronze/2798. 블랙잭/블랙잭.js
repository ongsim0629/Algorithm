const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

const N = input[0][0];
const M = input[0][1];
const num_list = input[1].sort((a,b)=>a-b);
let result = 0;

for (let i = 0; i < num_list.length-2; i++){
    for (let j = i+1; j < num_list.length-1; j++){
        for(let k = j+1; k < num_list.length; k++){
            let sum = num_list[i] + num_list[j] + num_list[k];
            if (sum > result && sum <= M){
                result = sum;
            }
        }
    }
}

console.log(result);