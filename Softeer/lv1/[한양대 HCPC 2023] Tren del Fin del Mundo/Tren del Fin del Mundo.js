const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let input = [];
let isFirstLine = true;

rl.on('line',(line)=>{
    // 숫자 한 개인 N처리
    if(isFirstLine){
        input.push(Number(line));
        isFirstLine = false;
    }
    // 나머지는 쌍으로 처리
    else{
        const [num1, num2] = line.split(' ').map(Number);
        input.push([num1,num2]);
    }
}).on('close',()=>{
    // 가장 남쪽에 있다는 것의 의미는 y좌표가 가장 작다는 것을 의미한다.
    const N = input[0];
    let min = 1001;
    let idx = 0;
    for (let i = 1; i <= N; i++){
        if(min>=input[i][1]){
            min = input[i][1];
            idx = i;
        }
    }
    console.log(input[idx][0], input[idx][1]);
});
