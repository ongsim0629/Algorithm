const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number)

function KOI(arr){
    let answer = 0
    for(let i = 0; i < arr.length; i++){
        answer += arr[i]**2;
    }
    console.log(answer%10);
}

KOI(input)