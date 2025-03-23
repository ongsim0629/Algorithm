const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    console.log(line); // 입력받은 문자열을 그대로 출력
    rl.close();         // 입력을 종료
});