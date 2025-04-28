function solution(s) {
  const answer = [];
  const lastPos = {};            // { 문자: 마지막 인덱스 }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (lastPos[ch] === undefined) {
      // 처음 본 문자
      answer.push(-1);
    } else {
      // 가장 가까운 동일 문자까지 거리
      answer.push(i - lastPos[ch]);
    }

    // 현재 위치를 최신 기록으로 저장
    lastPos[ch] = i;
  }

  return answer;
}

// 테스트
console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]