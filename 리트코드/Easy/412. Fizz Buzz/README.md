# [Easy] Fizz Buzz - 412

[문제 링크](https://leetcode.com/problems/fizz-buzz/)

### [성능 요약](https://leetcode.com/submissions/detail/1399217555/)

메모리: 52.7 MB (less than 12.47% of JavaScript online submissions), 시간: 0 ms (faster than 100.00% of JavaScript online submissions)

### 분류

Math, String, Simulation

### 제출 일자

2024년 10월 22일 22:38

### 문제 설명

<p>Given an integer n, return a string array answer (1-indexed) where:</p>

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
-  answer[i] == "Fizz" if i is divisible by 3.
-  answer[i] == "Buzz" if i is divisible by 5.
-  answer[i] == i (as a string) if none of the above conditions are true.

### 조건
<p>1 <= n <= 10^4</p>


### 예시

Example 1:
```
Input: n = 3
Output: ["1","2","Fizz"]
```

Example 2:
```
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

Example 3:
```
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

### 풀이 과정
N의 범위가 10,000으로 O(N^2)의 알고리즘이 사용 가능함.<br>
단순하게 연산에 따라서 result_arr에 해당하는 문자열을 push해줌.<br>
이때 i % 3 == 0 이면서 동시에 i % 5 == 0인 경우를 제일 위에 처리해주어야하는 것을 주의해야함!


### 개선 방법
삼항 연산자를 이용해서 코드를 간결하게 만들 수 있다.

```
var fizzBuzz = function(n) {
    var ans = [];
    for (var i = 1; i <= n; i++) {
        ans.push(
            (i % 15 === 0) ? "FizzBuzz" :
            (i % 5 === 0) ? "Buzz" :
            (i % 3 === 0) ? "Fizz" :
            i.toString()
        );
    }
    return ans;
};
```
