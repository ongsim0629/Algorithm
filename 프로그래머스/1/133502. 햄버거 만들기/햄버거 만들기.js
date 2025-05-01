function solution(ingredient) {
  const stack = [];
  let burgers = 0;

  for (const item of ingredient) {
    stack.push(item);

    // 스택 끝 4개가 1-2-3-1인지 검사
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      // 햄버거 완성 → 4개 제거
      stack.pop(); stack.pop(); stack.pop(); stack.pop();
      burgers++;
    }
  }
  return burgers;
}