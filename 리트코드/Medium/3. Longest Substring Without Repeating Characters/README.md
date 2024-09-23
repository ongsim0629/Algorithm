# [Medium] Longest Substring Without Repeating Characters - 3

[문제 링크](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### 성능 요약

메모리: 57.8 MB (less than 11.21% of JavaScript online submissions), 시간: 304 ms (faster than 7.10% of JavaScript online submissions)

### 분류

Hash Table, String, Sliding Window

### 제출 일자

2024년 9월 23일 13:55

### 문제 설명

<p>Given a string s, find the length of the longest substring without repeating characters.</p>

### 조건
<p>0 <= s.length <= 5 * 104</p>
<p>s consists of English letters, digits, symbols and spaces.</p>


### 예시

Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
