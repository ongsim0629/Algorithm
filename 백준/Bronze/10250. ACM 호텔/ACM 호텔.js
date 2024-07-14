const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const T = input[0][0];
const test_case = [...input.slice(1)];

for(let i = 0; i < T; i++){
    let answer = '';
    let H = test_case[i][0];
    let W = test_case[i][1];
    let N = test_case[i][2];

    let floor = (N % H)*100;
    
    let room = parseInt(N / H) +1;
    if(floor == 0){
        room -= 1;
        floor = H*100;
    }

    console.log(floor+room)
}