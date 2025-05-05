function solution(x) {
  const digitSum = String(x).split('').reduce((acc, ch) => acc + Number(ch), 0);

  return x % digitSum === 0;
}