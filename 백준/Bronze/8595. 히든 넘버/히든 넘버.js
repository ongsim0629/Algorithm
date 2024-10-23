const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim().split("\n");

let N = Number(input[0]);
let str = input[1];
let char_arr = str.split('');

let sum = 0;
let target_num = '';
for (let i = 0; i < N; i++) {
    if (!isNaN(char_arr[i]) && char_arr[i] !== ' ') {
        // 숫자인 경우 target_num에 추가
        target_num += char_arr[i];
    } else {
        // 문자인 경우 현재까지의 target_num을 sum에 더하고 초기화
        if (target_num !== '') {
            sum += Number(target_num);
            target_num = '';
        }
    }
}

// 마지막에 남은 숫자가 있을 경우 처리
if (target_num !== '') {
    sum += Number(target_num);
}

console.log(sum);
