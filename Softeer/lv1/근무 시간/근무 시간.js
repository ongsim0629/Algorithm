const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line',(line)=>{
    input.push(line.split(' ')); 
}).on('close',()=>{
    let time = 0;
    for (let i = 0; i < 5; i++){
        const hour_a = Number(input[i][0].slice(0,2))*60;
        const minute_a = Number(input[i][0].slice(3,5));
        const time_a = hour_a + minute_a;
        const hour_b = Number(input[i][1].slice(0,2))*60;
        const minute_b = Number(input[i][1].slice(3,5));
        const time_b = hour_b + minute_b;
        time += time_b - time_a;
    }
    console.log(time);
});
