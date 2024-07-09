const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

function print_plus(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i][0] + arr[i][1]);
    }
}

print_plus(input);