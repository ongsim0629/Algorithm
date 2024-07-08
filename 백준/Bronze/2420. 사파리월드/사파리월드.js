const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number)

function safari(arr){
    let answer = (arr[0] - arr[1] >= 0 ? arr[0] - arr[1] : arr[1]-arr[0])
    console.log(answer);
}

safari(input)