const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line',(line)=>{
    input.push(line.trim().split(' ').map(Number));
}).on('close', ()=>{
    const N = input[0][0];
    let max = -Infinity;
    for(let i = 0; i < N; i++){
        for(let j = i+1; j<N; j++){
            if(max<input[1][i]*input[1][j]){
                max = input[1][i]*input[1][j];
            }
        }
    }
    console.log(max);
});
