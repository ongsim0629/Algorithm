function solution(s) {
  let answer = 0;      // 분해된 문자열 수
  let x = '';          // 현재 블록의 기준 문자
  let cntX = 0;        // x의 개수
  let cntO = 0;        // x가 아닌 문자 개수

  for (let i = 0; i < s.length; i++) {
    if (cntX === 0) {          // 새 블록 시작
      x = s[i];
      answer++;                // 블록 개수 +1
    }

    // 개수 누적
    if (s[i] === x) cntX++;
    else cntO++;

    // 두 횟수가 같아지면 블록 종료
    if (cntX === cntO) {
      cntX = cntO = 0;         // 다음 블록을 위해 리셋
    }
  }

  return answer;
}