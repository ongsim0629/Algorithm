const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
let student = [];

function gwaje(arr){
    for(let i = 1; i < 31; i++){
        if(!arr.includes(i)){
            student.push(i);
        }
    }
    student.sort((a,b)=> a-b);
    for(let i = 0; i < 2; i++){
        console.log(student[i]);
    }
}

gwaje(input)