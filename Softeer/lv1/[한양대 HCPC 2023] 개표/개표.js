const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(Number(line));
}).on('close',()=>{
    // 후보자의 수
    const T = input[0];
    // 후보자의 수 만큼 반복문 실행해서 그리기!
    for (let i = 1; i < input.length; i++){
        let ans = '';
        const row = parseInt(input[i] / 5);
        //repeat 메소드 이용!
        ans += '++++ '.repeat(row);
        const col = input[i] % 5;
        ans += '|'.repeat(col);
        console.log(ans);
    }
});
