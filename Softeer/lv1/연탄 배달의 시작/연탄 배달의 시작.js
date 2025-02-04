const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line)=>{
   input.push(line.split(' ').map(Number)); 
}).on('close',()=>{
    // 마을 좌표 정렬
    let answer = 1;
    let length = Infinity;
    const sorted_vil = input[1].sort((a,b)=>a-b);
    for (let i = 0; i <sorted_vil.length-1; i++){
        // 만약 거리가 짧은 곳 발견했다면
        if(Math.abs(sorted_vil[i]-sorted_vil[i+1])<length){
            length = Math.abs(sorted_vil[i]-sorted_vil[i+1]);
            answer = 1;
        }
        // 거리 짧은 곳과 같은 거리인 다른 마을 쌍 발견했다면
        else if (Math.abs(sorted_vil[i]-sorted_vil[i+1])===length){
            answer++;
        }
    }
    console.log(answer);
});
