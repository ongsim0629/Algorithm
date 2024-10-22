# [Easy] Valid Parenthesis - 20

[문제 링크](https://leetcode.com/problems/valid-parentheses/)

### [성능 요약](https://leetcode.com/submissions/detail/1430453892/)

메모리: 51.1 MB (less than 28.07% of JavaScript online submissions), 시간: 1 ms (faster than 99.59% of JavaScript online submissions)

### 분류

String, Stack

### 제출 일자

2024년 10월 22일 23:07

### 문제 설명

<p>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:</p>

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### 조건
<p>1 <= s.length <= 10^4</p>
<p>s consists of parentheses only '()[]{}'.</p>


### 예시

Example 1:
```
Input: s = "()"

Output: true
```

Example 2:
```
Input: s = "()[]{}"

Output: true
```

Example 3:
```
Input: s = "(]"

Output: false
```

Example 3:
```
Input: s = "([])"

Output: true
```

### 풀이 과정
N의 범위가 10,000으로 시간 복잡도 O(N^2) 이하의 알고리즘이 사용 가능하다는 점을 인식. <br>

여는 괄호인 경우에는 스택에 무조건 푸시하고 닫는 괄호인 경우 스택의 마지막 값을 확인하여서 검증을 해줌

### 개선 방법
문자열의 분리 방법 다양하다.
```
for (let c of s);
s.charAt(i);
```

<p>여는 괄호를 스택에 추가해줄 때 닫는 괄호를 함께 푸시하고, 닫는 괄호에 대한 검증을 할 때는 스택의 최상단의 값과 비교해주는 방법</p>

```
var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
}
```
