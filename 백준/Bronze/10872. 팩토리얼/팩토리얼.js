const N = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

let answer = 1;

function factorial(int){
    for(let i = 1; i <= int; i++){
        answer *= i;
    }
    console.log(answer);
}

factorial(N);