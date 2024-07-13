const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

// 1개의 문자열만 입력되는 경우
const inputArray = input.includes(" ") ? input.split(" ") : [input];

// 공백 문자 1개만 입력되면 0을 출력해야한다
if(inputArray.length == 1){
    if(inputArray[0] == ''){
        inputArray.pop();
    }
}

console.log(inputArray.length)