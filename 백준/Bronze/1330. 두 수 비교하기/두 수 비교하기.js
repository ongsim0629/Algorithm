const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);

function compare(arr){
    let A = arr[0];
    let B = arr[1];
    if (A - B > 0){
        let answer = '>';
        console.log(answer);
    }
    else if (A - B == 0){
        let answer = '==';
        console.log(answer);
    }
    else{
        let answer = '<';
        console.log(answer);
    }
}

compare(input);