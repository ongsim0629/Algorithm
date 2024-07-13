const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
let answer = (input[0] * input[1] * input[2]).toString();

for(let i = 0; i<=9; i++){
    let count = 0;
    for(let char in answer){
        if (answer.at(char) == i){
            count++;
        }
    }
    console.log(count)
}