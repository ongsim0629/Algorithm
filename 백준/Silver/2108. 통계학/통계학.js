const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(Number);
const N = input[0];
const test_case = input.slice(1);

// 산술 평균
function arithmetic_mean(arr) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }

    let mean = sum / N;
    // 소수점 첫째 자리에서 반올림
    let roundedMean = Math.round(mean);
    // -0 처리
    let answer = roundedMean === -0 ? 0 : roundedMean;
    console.log(answer);
}

// 중앙값
function median(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr[Math.floor(N / 2)]);
}

// 최빈값
function mode(arr) {
    let frequency = {};
    let maxFreq = 0;
    let modes = [];

    // 빈도 계산
    for (let num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    // 최빈값 찾기
    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    // 여러 최빈값이 있을 경우 두 번째로 작은 값 출력
    modes.sort((a, b) => a - b);
    let modeValue = modes.length > 1 ? modes[1] : modes[0];

    console.log(modeValue);
}

// 범위
function range(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr[N - 1] - arr[0]);
}

function statistics() {
    arithmetic_mean(test_case);
    median(test_case);
    mode(test_case);
    range(test_case);
}

statistics();
