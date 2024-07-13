const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

for(let i = 1; i <= input; i++){
    let answer = '';
    answer += ' '.repeat(input-i)+"*".repeat(i);
    console.log(answer); 
}
