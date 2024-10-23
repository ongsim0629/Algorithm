# [Easy] Longest Common Prefix - 14

[문제 링크]([https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/longest-common-prefix/))

### [성능 요약](https://leetcode.com/submissions/detail/1431004418/)

메모리: 48.9 MB (less than 86.21% of JavaScript online submissions), 시간: 0 ms (faster than 100.00% of JavaScript online submissions)

### 분류

String, Trie

### 제출 일자

2024년 10월 23일 11:25

### 문제 설명

<p>Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".</p>

### 조건
<p>1 <= strs.length <= 200</p>
<p>0 <= strs[i].length <= 200</p>
<p>strs[i] consists of only lowercase English letters.</p>


### 예시

Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### 풀이 과정
첫 번째 문자열을 접두사라고 생각하고 그 다음 단어에 해당 접두사가 있는지 확인, 없다면 해당 접두사의 마지막 글자를 slice하면서 글자 수를 줄인다.

### 개선 방법
숏 코딩

```
for (let c of s);
s.charAt(i);
```

<p>정렬을 먼저 수행하고, substring을 진행</p>

```
var longestCommonPrefix = function(strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};
```
