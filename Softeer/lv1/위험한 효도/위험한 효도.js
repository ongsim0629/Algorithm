const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let a, b, d;

rl.on('line',(line)=>{
    [a, b, d] = line.split(' ').map(Number); 
}).on('close',()=>{
    let length = d;
    let time = 0;

    // 술래 터치하기 전까지의 연산
    while(length != 0){
        if(length > a){
            length = length-a;
            time += a + b;
        }
        else if(length === a){
            time += a;
            length = 0;
        }
        else{
            time += length;
            length = 0;
        }
    }
    // 터치한 후 출발 선 도착하는 순간까지의 연산
    while(length != d){
        if(d-length > b){
            length += b;
            time += a + b;
        }
        else if (d-length === b){
            time += b;
            length = d;
        }
        else{
            time += d-length;
            length = d;
        }
    }
    console.log(time);
});
