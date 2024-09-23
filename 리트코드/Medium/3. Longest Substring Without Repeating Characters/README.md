# [Medium] Longest Substring Without Repeating Characters - 3

[문제 링크](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### [성능 요약](https://leetcode.com/submissions/detail/1399217555/)

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

### 개선 방법
시간 복잡도 개선 => 해시 테이블과 슬라이딩 윈도우 방식.

<p>이미 본 적 있는 문자를 해시테이블에 기록하고 중복이 나타나면 그 중복 문자 발생 이후로 윈도우 슬라이딩하는 방법</p>

```
var lengthOfLongestSubstring = function(s) {
    let map = new Map(); // 문자와 그 위치를 저장하는 해시테이블
    let maxLength = 0; // 최대 부분 문자열 길이
    let start = 0; // 현재 윈도우의 시작점

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];

        // 현재 문자가 이미 해시테이블에 존재하고, start보다 크거나 같으면
        // 중복 발생한 위치로 슬라이딩
        if (map.has(currentChar) && map.get(currentChar) >= start) {
            start = map.get(currentChar) + 1; // 윈도우 시작점을 중복된 문자 바로 다음으로 이동
        }

        // 현재 문자의 위치를 해시테이블에 갱신
        map.set(currentChar, end);

        // 최대 길이를 갱신
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
```
