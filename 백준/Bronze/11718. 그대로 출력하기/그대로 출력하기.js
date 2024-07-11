const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(line => line.trim());;

function print(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
  }
  
print(input)