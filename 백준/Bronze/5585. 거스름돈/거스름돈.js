const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim();

let remain = 1000 - input;
let coin = [500, 100, 50, 10, 5, 1]
let answer = 0;

for(value in coin){
    answer += parseInt(remain/coin[value]);
    remain = remain%coin[value];
}

console.log(answer)