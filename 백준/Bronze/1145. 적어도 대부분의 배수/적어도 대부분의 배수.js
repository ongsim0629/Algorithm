// input 처리 - [1,2,3,4,5]
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./알고리즘/example.txt").toString().trim().split(" ").map(Number);

// 브루스 포스 -> 무차별 대입 (따라서 1부터 계속 할 예정)
let answer = 1;

// input에서 나눠지는 거 3개 될 때 까지 while문으로 무한 반복
while (true) {
  // count는 매분기마다 초기화
  let count = 0;
  // answer를 input의 값들로 나눠봐서 나눠지면 count + 1
  for (value of input) {
    if(answer % value === 0) {
      count++;
    }
  }
  // 처음으로 3개 이상의 값들로 나눠지는 순간 무한루프 중단
  if (count > 2)
    break;
  // 브루스 포스 ㄱㄱ
  answer++;
}

console.log(answer);