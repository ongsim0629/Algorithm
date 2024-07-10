const fs = require("fs");
const input = +fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim();

let output = ""; // 문자열을 담을 변수

function hanoi(num, from, middle, to) {
    if (num === 1) {
        output += `${from} ${to}\n`; // 출력 문자열에 추가
        return;
    }
    hanoi(num - 1, from, to, middle);
    output += `${from} ${to}\n`; // 출력 문자열에 추가
    hanoi(num - 1, middle, from, to);
}

if (input <= 20) {
    hanoi(input, 1, 2, 3);
    output = output.trim(); // 마지막 줄의 개행 제거
    console.log(output.split("\n").length); // 줄 개수 출력
    console.log(output); // 결과 출력
} else {
    console.log((2n ** BigInt(input) - 1n).toString());
}