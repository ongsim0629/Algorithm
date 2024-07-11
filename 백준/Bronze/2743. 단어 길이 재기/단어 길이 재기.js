const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function str_length(char){
    console.log(char.length);
}

str_length(input);