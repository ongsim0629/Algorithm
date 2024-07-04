// input 처리 - [[병사 수, 무찌를 수], [적 힘, 민첩, 지능], [적 힘, 민첩, 지능], ... ]
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
let N = input[0][0];
let K = input[0][1];
let list = [...input];
list.splice(0,1)
let min = 3000000;

for (let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        for(let k = 0; k < N; k++){
            let count = 0;
            for(let n = 0; n < N; n++){
                if (list[i][0] >= list[n][0] && list[j][1] >= list[n][1] && list[k][2] >= list[n][2]) {
                    count++;
                }
            }
            if (count >= K) min = Math.min(min, list[i][0] + list[j][1] + list[k][2]);
        }
    }
}

console.log(min)