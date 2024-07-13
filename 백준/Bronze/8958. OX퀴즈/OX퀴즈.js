const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().replace(/\r/g, '').trim().split("\n");

const N = Number(input[0]);
const test_case = [...input.slice(1)];

for(let i = 0; i < N; i++){
    let answer = 0;
    let pre = 'X';
    let value = 0;
    for(let j = 0; j < test_case[i].length; j++){
        // 현재 값이 O일 때
        if(test_case[i].charAt(j) == 'O'){
            //이전 값이 X인 경우 +1 추가
            if(pre == 'X'){
                value = 1;
                answer += value;
                //이전 값을 O로 업데이트
                pre = 'O';
            }
            //이전 값이 O인 경우
            else{
                value++;
                answer += value;
            }
        }
        // 현재 값이 X 일 때
        else{
            pre = 'X';
            value = 0;
        }
    }
    console.log(answer);
}
