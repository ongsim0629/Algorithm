const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().replace(/\r/g, '').trim().split("\n").map((el) => el.split(" "));

let str = input[0][0];
const M = Number(input[1][0]);

let stack = [];
let calc_stack = [];

for (let i = 0; i < str.length; i++){
    stack.push(str[i]);
}

for(let i = 2; i < M+2; i++){
    if (input[i][0] == 'P'){
        stack.push(input[i][1]);
    }
    else if (input[i][0] == 'L'){
        if (stack.length != 0){
            calc_stack.push(stack.pop());
        }
    }
    else if (input[i][0] == 'D'){
        if(calc_stack.length != 0){
            stack.push(calc_stack.pop());
        }
    }
    else if (input[i][0] == 'B'){
        if(stack.length != 0){
            stack.pop();
        }
    }
}

let answer = stack.join('');
answer += calc_stack.reverse().join('');
console.log(answer);
