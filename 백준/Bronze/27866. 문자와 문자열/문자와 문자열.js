const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n")
const i = input[1];

function check_char(str) {
    console.log(str.at(i-1));
  }
  
check_char(input[0])