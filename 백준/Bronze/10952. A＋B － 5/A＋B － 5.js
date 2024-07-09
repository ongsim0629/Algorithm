const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

function print_plus(arr){
    let i = 0;
    while(arr[i][0] != 0 && arr[i][1] != 0){
        console.log(arr[i][0] + arr[i][1]);
        i++;
    }
}

print_plus(input);
