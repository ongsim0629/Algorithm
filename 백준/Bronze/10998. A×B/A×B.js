const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);

function multiply(arr){
    let a = arr[0];
    let b = arr[1];
    return a*b;
}

let answer = multiply(input);
console.log(answer);