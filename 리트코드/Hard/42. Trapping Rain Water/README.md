# [Hard] Trapping Rain Water - 42

[문제 링크](https://leetcode.com/problems/trapping-rain-water/description/)

### [성능 요약](https://leetcode.com/submissions/detail/1431593489/)

메모리: 51.5 MB (beats 54.40 % of javascript submissions.), 시간: 0 ms (beats 100.00 % of javascript submissions.)

### 분류

Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack

### 제출 일자

2024년 10월 24일 01:19

### 문제 설명

<p>Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.</p>

![image](https://github.com/user-attachments/assets/5fdf644c-845e-49d3-8122-7c37bf7e749e)

### 조건
<p>n == height.length</p>
<p>1 <= n <= 2 * 10^4</p>
<p>0 <= height[i] <= 10^5</p>


### 예시

Example 1:
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

Example 2:
```
Input: height = [4,2,0,3,2,5]
Output: 9
```


### 풀이 과정
투 포인터를 이용해서 각각 left와 right의 기둥들을 순서대로 탐색한다. 이때 최대 높이의 기둥의 높이를 저장해두었다가 연산을 할 때 이를 이용한다.

### 개선 방법
```
/** 1) Brute force */
// time O(n^2)
// space O(1)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  for (let i = 0; i < height.length; i++) {
    let lMax = 0;
    let rMax = 0;

    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, height[j]);
    }
    for (let j = i + 1; j < height.length; j++) {
      rMax = Math.max(rMax, height[j]);
    }

    const water = Math.min(lMax, rMax) - height[i];
    if (water > 0) res += water;
  }

  return res;
}

/** 2) Dynamic programming */
// time O(n)
// space O(n)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  let l = height.length;
  let lMax = {};
  let rMax = {};

  lMax[0] = height[0];
  for (let i = 1; i < l; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
  }

  rMax[l - 1] = height[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    rMax[i] = Math.max(height[i], rMax[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    res += Math.min(lMax[i], rMax[i]) - height[i];
  }

  return res;
}

/** 3) Stack */
// time O(n)
// space O(n)
function trap(height) {
  let res = 0;
  let i = 0;
  const st = [];

  while (i < height.length) {
    while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
      const top = st[st.length - 1];
      st.pop();

      if (st.length === 0) break;

      const dist = i - st[st.length - 1] - 1;
      const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
      res += dist * h;
    }
    st.push(i);
    i++;
  }
  return res;
}

/** 4) Two pointers */
// time O(n)
// space O(1)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let l = 0;
  let r = height.length - 1;

  let lMax = 0;
  let rMax = 0;

  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    if (height[l] < lMax) {
      res += lMax - height[l];
    }

    rMax = Math.max(rMax, height[r]);
    if (height[r] < rMax) {
      res += rMax - height[r];
    }

    height[l] < height[r] ? l++ : r--;
  }

  return res;
}
```
