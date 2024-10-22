# [Easy] Palindrome Number - 14

[문제 링크](https://leetcode.com/problems/palindrome-number/)

### [성능 요약](https://leetcode.com/submissions/detail/1430495648/)

메모리: 59.1 MB (less than 9.37% of JavaScript online submissions), 시간: 7 ms (faster than 98.89% of JavaScript online submissions)

### 분류

Math

### 제출 일자

2024년 10월 22일 23:51

### 문제 설명

<p>Given an integer x, return true if x is a palindrome, and false otherwise.</p>

### 조건
<p>-2^31 <= x <= 2^31 - 1</p>


### 예시

Example 1:
```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

Example 2:
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3:
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### 풀이 과정
숫자를 문자열로 변환한 뒤, 내장 함수인 split()과 reverse()를 이용해서 문자열을 뒤집은 순서대로 나열되어 있는 배열을 만든 다음, 배열의 문자들을 순서대로 합친 문자열을 만들어서 원래의 숫자를 문자열로 바꾼 문자열과 비교한다. 

### 개선 방법
수학적인 방법으로의 연산

<p> 나눗셈의 몫과 나머지로 팰린드롬 수 인지 확인할 수 있다. </p>

```
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;    
};

```
