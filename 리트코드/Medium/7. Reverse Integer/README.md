# [Medium] Reverse Integer - 7

[문제 링크](https://leetcode.com/problems/reverse-integer/)

### [성능 요약](https://leetcode.com/submissions/detail/1430520701/)

메모리: 52.7 MB (less than 57.64% of JavaScript online submissions), 시간: 72 ms (faster than 65.67% of JavaScript online submissions)

### 분류

Math

### 제출 일자

2024년 10월 23일 00:18

### 문제 설명

<p>Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.</p>

<b>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</b>

### 조건
<p>-2^31 <= x <= 2^31 - 1</p>


### 예시

Example 1:
```
Input: x = 123
Output: 321
```

Example 2:
```
Input: x = -123
Output: -321
```

Example 3:
```
Input: x = 120
Output: 21
```

### 풀이 과정
원래의 숫자를 문자열로 바꾼 후, split()과 reverse() 내장 함수로 기존 문자열의 반대 순서로 숫자를 나열하는 배열을 만든다.
그리고 배열의 순서대로 거꾸로 뒤집어진 문자열을 만든 후 기존의 input값이 음수여서 -가 문자열의 마지막 부분에 있는 경우 문자열을 다시 수정해주고 이를 parseInt()를 통해서 숫자로 만들어준다.
또한 숫자가 32 bit 정수의 범위를 넘어가면 0을 반환하도록 해준다.

### 개선 방법
수학을 이용하기 -> 나머지와 몫!

```
var reverse = function(x) {
    let res = 0;
    if (x < 0) {
        res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        res = parseInt(String(x).split('').reverse().join(''));
    }

    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0;
    }

    return res;    
};
```
