const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line',(line)=>{
    input.push(line.split(' ').map(Number)); 
}).on('close', ()=>{
    const T = input[0][0];
    for (let i = 1; i <= T; i++){
        const sum = input[i][0] + input[i][1]; 
        console.log("Case #" + i +": "+sum);
    }
});
