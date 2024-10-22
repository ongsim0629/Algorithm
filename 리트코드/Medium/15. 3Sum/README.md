# [Medium] 3Sum - 15

[문제 링크](https://leetcode.com/problems/3sum/)

### [성능 요약](https://leetcode.com/submissions/detail/1430213700/)

메모리: 65.4 MB (less than 65.64% of JavaScript online submissions), 시간: 39 ms (faster than 97.94% of JavaScript online submissions)

### 분류

Array, Two Pointers, Sorting

### 제출 일자

2024년 10월 22일 17:36

### 문제 설명

<p>Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.<br>

Notice that the solution set must not contain duplicate triplets.</p>

### 조건
<p>3 <= nums.length <= 3000</p>
<p>-10^5 <= nums[i] <= 10^5</p>


### 예시

Example 1:
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

Example 2:
```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

Example 3:
```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

### 풀이 과정
완전 탐색의 경우 3중 for문을 사용해야 한다. 하지만 N의 제한이 3,000 이므로 O(N^2)인 알고리즘이 사용가능하다.<br>

반복문을 써서 하나의 숫자를 고정하면, 2개의 합을 구하는 문제가 되고, 투 포인터를 이용해서 2개의 수의 합을 while문 1개로 연산할 수 있다.

### 개선 방법
시간 복잡도 개선: for문 2개 사용 => 해시테이블을 사용한 방법

<p>for문을 두 개 써서 해시 테이블에 있는 두 수의 합의 빼기 연산의 값이 해시 테이블에 있는지 확인</p>

```
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sorted Array
    let answer = [];
    
    if (nums.length < 3) {
        return answer;
    }
    
    if (nums[0] > 0) {
        return answer;
    }
    
    let hashMap = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        hashMap.set(nums[i], i);
    }
    
    for (let i = 0; i < nums.length - 2; ++i) {
        if (nums[i] > 0) {
            break;
        }

        for (let j = i + 1; j < nums.length - 1; ++j) {
            let required = -1 * (nums[i] + nums[j]);
            //  hashMap.get(required) > j 조건은 중복된 조합을 피하기 위한 조건
            if (hashMap.has(required) && hashMap.get(required) > j) {
                answer.push([nums[i], nums[j], required]);
            }
            j = hashMap.get(nums[j]);
        }
        
        i = hashMap.get(nums[i]);
    }

    return answer;
};
```
