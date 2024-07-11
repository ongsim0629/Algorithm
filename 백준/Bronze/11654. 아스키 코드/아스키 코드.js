const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function ascii(char){
    console.log(parseInt(char.codePointAt()));
}

ascii(input);