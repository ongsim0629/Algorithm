function solution(sizes) {
  let maxLong = 0;   // 긴 변 중 최댓값
  let maxShort = 0;  // 짧은 변 중 최댓값

  for (const [w, h] of sizes) {
    const long  = Math.max(w, h);
    const short = Math.min(w, h);
    if (long  > maxLong)  maxLong  = long;
    if (short > maxShort) maxShort = short;
  }

  return maxLong * maxShort;
}
