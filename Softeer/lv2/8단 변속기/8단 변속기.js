const fs = require('fs');
const input = fs.readFileSync('/dev/stdin','utf8').trim().split(' ');
let flag_a = true;
let flag_d = true;

for (let i = 0; i < input.length-1; i++){
    if(input[i+1] - input[i] !== 1){
        flag_a = false;
    }
    if(input[i+1] - input[i] !== -1){
        flag_d = false;
    }
}

if(flag_d === true){
    console.log('descending');
}
else if(flag_a === true){
    console.log('ascending');
}
else{
    console.log('mixed');
}
