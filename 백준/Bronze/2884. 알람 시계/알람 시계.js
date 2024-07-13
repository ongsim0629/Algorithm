const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);

if(input[1]< 45){
    if(input[0] == 0){
        input[0] = 23;
    }
    else{
        input[0] = input[0] - 1;
    }
    let minute = 45 - input[1];
    input[1] = 60 - minute;
}
else{
    input[1] = input[1] - 45;
}

console.log(input[0], input[1])