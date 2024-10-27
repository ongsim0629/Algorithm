const N = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim();
let found = false;

for (let i = 1; i < N; i++){
    let str = i.toString();
    let sum = i;

    for (let j = 0; j < str.length; j++){
        sum += parseInt(str[j]);
    }

    if(sum == N){
        console.log(i);
        found = true;
        break;
    }
}

if(!found){
    console.log(0);
}