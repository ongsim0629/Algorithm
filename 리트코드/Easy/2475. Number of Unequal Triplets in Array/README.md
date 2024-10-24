# [Easy] Number of Unequal Triplets in Array - 2475

[문제 링크](https://leetcode.com/problems/number-of-unequal-triplets-in-array/)

### [성능 요약](https://leetcode.com/submissions/detail/1431962562/)

메모리: 49 MB (beats 74.60 % of javascript submissions.) 시간: 19 ms (beats 93.65 % of javascript submissions.)

### 분류

Hash Table, Array, Sorting

### 제출 일자

2024년 10월 24일 10:12

### 문제 설명

<p>You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:</p>

- 0 <= i < j < k < nums.length
- nums[i], nums[j], and nums[k] are pairwise distinct.
  - In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].

<p>Return the number of triplets that meet the conditions.</p>

### 조건
<p>3 <= nums.length <= 100</p>
<p>1 <= nums[i] <= 1000</p>

### 예시

Example 1:
```
Input: nums = [4,4,2,4,3]
Output: 3
Explanation: The following triplets meet the conditions:
- (0, 2, 4) because 4 != 2 != 3
- (1, 2, 4) because 4 != 2 != 3
- (2, 3, 4) because 2 != 4 != 3
Since there are 3 triplets, we return 3.
Note that (2, 0, 4) is not a valid triplet because 2 > 0.
```

Example 2:
```
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: No triplets meet the conditions so we return 0.
```

### 풀이 과정
N의 범위가 100으로 3중 for문을 이용한 완전 탐색으로 문제 풀이가 가능하다는 사실을 확인 <br>

### 개선 방법
시간 복잡도 개선 => 해시 테이블 (배열에서 인덱스와 요소의 매핑을 유지하면서 연산하기 위해서 해시 테이블이 가장 좋다.)

1. Iterate over frequencies.
2. Track the sum of previous frequencies.
3. Track the sum of next frequences.
4. Sum them all.

```
var unequalTriplets = function(nums) {
    let count = 0,
        prev = 0,
        nxt = nums.length;
    let frequencies = nums.reduce((count, currentValue) => {
        return (count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1), count);
    }, {});
    
    for (freq of Object.values(frequencies)) {
        nxt -= freq;
        count += (prev * freq * nxt);
        prev += freq
    }
    return count
};
```

