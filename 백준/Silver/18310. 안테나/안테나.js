// input 처리 - [[집의 수], [집의 위치 5, 1, 7, 9] ]
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
// n  = 집의 개수 
let n = input[0][0]
// 거리 순으로 나열했을 때 가운데 값이 정답인듯..? -> 왠지는 모르겠는데 그런듯
let list = input[1].sort((a,b)=>a-b)

if(n%2==0){
    let a = 0;
    let b = 0;
    for(i=0;i<n;i++){
        a += (list[n/2-1]-list[i]>0?list[n/2-1]-list[i]:list[i]-list[n/2-1])
        b += (list[n/2]-list[i]>0?list[n/2]-list[i]:list[i]-list[n/2])
    }
    console.log((a-b>0?list[n/2]:list[n/2-1]))
}
else{
    console.log(list[parseInt(n/2)])
}

