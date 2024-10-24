# [Medium] 132 Pattern - 456

[문제 링크](https://leetcode.com/problems/132-pattern/)

### [성능 요약](https://leetcode.com/submissions/detail/1431418610/)

메모리: 72.7 MB (beats 94.81 % of javascript submissions.), 시간: 18 ms (faster than 65.67% of JavaScript online submissions)

### 분류

Array, Binary Search, Stack, Monotonic Stack, Ordered Set

### 제출 일자

2024년 10월 23일 21:50

### 문제 설명

<p>Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.</p>


### 조건
<p>n == nums.length</p>
<p>1 <= n <= 2 * 10^5</p>
<p>-10^9 <= nums[i] <= 10^9</p>


### 예시

Example 1:
```
Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
```

Example 2:
```
Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
```

Example 3:
```
Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
```

### 풀이 과정
https://enumclass.tistory.com/205
최솟값의 스택과 maxThird 스택의 최댓값, 그리고 배열의 오른쪽 부터 탐색하면서 세 값들을 비교하여 연산함

### 개선 방법
숏코딩!

```
var find132pattern = function(nums) {
    let stack = [];
    let third = Number.MIN_SAFE_INTEGER;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < third) return true;
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            third = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};
```
