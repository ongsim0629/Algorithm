const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
const K = input[0];
const numbers = input.slice(1);
let real_numbers = [];

function zero(arr){
    // 계산 -> 진짜 숫자 스택 이용 (0이면 스택의 맨 위의 값 pop, 0 아니면 그냥 그 번호 push)
    for(let i = 0; i < K; i++){
        if(arr[i] == 0){
            real_numbers.pop();
        }
        else{
            real_numbers.push(arr[i]);
        }
    }

    // 진짜 숫자 스택이 비어있으면 -> 0 출력
    if(real_numbers.length == 0)
        console.log(0);
    // 진짜 숫자 스액이 차있으면 -> 숫자들 합 출력
    else{
        let answer = 0;
        for(let j = 0; j < real_numbers.length; j++){
            answer += real_numbers[j];
        }
        console.log(answer);
    }

}

zero(numbers);