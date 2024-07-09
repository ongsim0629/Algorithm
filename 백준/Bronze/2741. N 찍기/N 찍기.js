const N = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

// 시간초과 나기때문에 스트링으로 변환해서 한 번에 출력
let answer= '';

function write_N(int){
    for(let i = 1; i <= int; i++){
        answer += i + '\n';
    }
    console.log(answer);
}

write_N(N);