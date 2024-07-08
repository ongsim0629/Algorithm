const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number)

function giho(arr){
    console.log((arr[0]+arr[1])*(arr[0]-arr[1]));
}

giho(input);