const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
 
const [N, K] = input[0].split(" ").map(Number);
const words = [];
const visited = new Array(26).fill(false);
let answer = 0;
 
for (let i = 1; i <= N; i++) {
  words.push(input[i].trim());
}

// 필수 단어 'a', 'c', 'i', 'n', 't'
if (K < 5) {
  console.log(0);
  return;
}

visited["a".charCodeAt() - "a".charCodeAt()] = true;
visited["c".charCodeAt() - "a".charCodeAt()] = true;
visited["i".charCodeAt() - "a".charCodeAt()] = true;
visited["n".charCodeAt() - "a".charCodeAt()] = true;
visited["t".charCodeAt() - "a".charCodeAt()] = true;

// DFS로 가능한 단어 조합 계산
dfs(0, 0);
console.log(answer);
 
function dfs(start, idx) {
  // 선택된 알파벳이 K-5개가 되었을 때
  if (idx === K - 5) {
    let count = 0;

    // 각 단어가 읽을 수 있는지 검사
    for (const word of words) {
      let isReadable = true;

      for (const ch of word) {
        if (!visited[ch.charCodeAt() - "a".charCodeAt()]) {
          isReadable = false;
          break;
        }
      }

      if (isReadable) count++;
    }

    answer = Math.max(answer, count);
    return;
  }

  // DFS로 조합을 만들기
  for (let i = start; i < 26; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(i + 1, idx + 1);
    visited[i] = false;
  }
}