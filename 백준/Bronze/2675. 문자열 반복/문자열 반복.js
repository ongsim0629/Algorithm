const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.trim().split(" "));
const N = Number(input[0][0]);
test_case = [...input.slice(1)];

for(let i = 0; i < N; i++){
    test_case[i][0] = Number(test_case[i][0]);
    let target = test_case[i][1].split("");
    let answer = '';
    for(let j = 0; j < test_case[i][1].length; j++){
        answer += test_case[i][1][j].repeat(test_case[i][0]);
    }
    console.log(answer);
}
