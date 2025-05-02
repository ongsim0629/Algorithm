function solution(babbling) {
  const syllables = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (const word of babbling) {
    let idx = 0;
    let prev = "";      // 직전 음절
    let ok = true;

    while (idx < word.length) {
      let matched = false;

      for (const syl of syllables) {
        if (word.startsWith(syl, idx) && syl !== prev) {
          idx += syl.length;   // 포인터 이동
          prev = syl;          // 중복 체크용 갱신
          matched = true;
          break;
        }
      }

      if (!matched) {   // 어떤 음절도 맞지 않음 → 실패
        ok = false;
        break;
      }
    }

    if (ok) answer++;
  }
  return answer;
}
