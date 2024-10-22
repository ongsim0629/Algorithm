# [Easy] Longest Substring Without Repeating Characters - 3

[문제 링크](https://leetcode.com/problems/two-sum/)

### [성능 요약](https://leetcode.com/submissions/detail/1430103790/)

메모리: 49.5 MB 시간: 54 ms

### 분류

Hash Table, Array

### 제출 일자

2024년 10월 222일 15:08

### 문제 설명

<p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.</p>

### 조건
<p>2 <= nums.length <= 10^4</p>
<p>-10^9 <= nums[i] <= 10^9</p>
<p>-10^9 <= target <= 10^9</p>
<b>Only one valid answer exists.</b>

### 예시

Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### 풀이 과정
N의 범위가 10,000으로 시간 복잡도 O(N^2) 이하의 알고리즘이 사용 가능하다는 점을 인식. <br>

두 개의 for 문을 사용하여 (시간 복잡도 O(N^2)이 가능하기 때문에) 완전 탐색으로 정답을 찾음.

### 개선 방법
시간 복잡도 개선 => 해시 테이블 (배열에서 인덱스와 요소의 매핑을 유지하면서 연산하기 위해서 해시 테이블이 가장 좋다.)
Map 사용하기 : 키-값의 쌍

<p>먼저 각각의 요소와 인덱스로 해시테이블에 값을 저장한다. </br>
그 후에 target-nums[i]를 만족하는 값이 해시 테이블에 존재하는 지 확인한다.
만약 만족하는 값이 존재하면 해당하는 값의 인덱스와 i를 리턴한다.
</p>

반복문 2번 쓰기 : map에 요소들 저장할 때 한 번, 정답 찾을 때 한 번
```
var twoSum = function(nums, target) {
   const map = new Map();
    const N = nums.length;
    for(let i = 0; i < N; i++){
        // 첫 번째 인자 : 키, 두 번째 인자 : 값
        map.set(nums[i], i);
    }
    for(let i = 0; i < N; i++){
        const complement = target - nums[i];
        // 본인 두 번 사용하는 경우 주의!
        if (map.has(complement) && map.get(complement) != i){
            return [i, map.get(complement)];
        }
    }
};

```
=> 런타임: 5 ms, 메모리:	52.4 MB <br>
<br>
반복문 1번 쓰기 : map에 요소를 저장할 때 complement가 존재하는 지 확인하고 존재하지 않는다면 map에 요소를 저장한다.
```
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    // Return an empty array if no solution is found
    return [];
};
```
=> 런타임: 2 ms, 메모리:	51.8 MB

### 주의할 점
map.has연산과 map.get연산의 인자는 key임!!!!!!
