const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);

function calc(arr){
    let a = arr[0];
    let b = arr[1];
    let answer = [];
    answer.push(a+b);
    answer.push(a-b);
    answer.push(a*b);
    answer.push(parseInt((a/b)));
    answer.push(a%b);
    return answer;
}

function print(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return 0;
}
let answer = calc(input);
print(answer);
