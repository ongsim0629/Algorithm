function solution(n, lost, reserve) {
  const lostSet    = new Set(lost);
  const reserveSet = new Set(reserve);

  for (const num of reserve) {
    if (lostSet.has(num)) {
      lostSet.delete(num);
      reserveSet.delete(num);
    }
  }

  const sortedReserve = [...reserveSet].sort((a, b) => a - b);

  for (const r of sortedReserve) {
    const front = r - 1;
    const back  = r + 1;

    if (lostSet.has(front)) {
      lostSet.delete(front);
    } else if (lostSet.has(back)) {
      lostSet.delete(back);
    }
  }

  return n - lostSet.size;
}
