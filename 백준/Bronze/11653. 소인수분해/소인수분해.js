const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let divisor = 2;

while (N > 1) {
    while (N % divisor === 0) {
        console.log(divisor);
        N /= divisor;
    }
    divisor++;
    if (divisor * divisor > N) break;
}

if (N > 1) {
    console.log(N);
}