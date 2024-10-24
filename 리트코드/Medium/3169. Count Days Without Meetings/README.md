# [Medium] Count Days Without Meetings - 3169

[문제 링크](https://leetcode.com/problems/count-days-without-meetings/)

### [성능 요약](https://leetcode.com/submissions/detail/1432204627/)

메모리: 74.3 MB, 시간: 58 ms

### 분류

Array, Sorting

### 제출 일자

2024년 10월 24일 16:06

### 문제 설명

<p>You are given a positive integer days representing the total number of days an employee is available for work (starting from day 1). You are also given a 2D array meetings of size n where, meetings[i] = [start_i, end_i] represents the starting and ending days of meeting i (inclusive).

Return the count of days when the employee is available for work but no meetings are scheduled.

Note: The meetings may overlap.</p>


### 조건
<p>1 <= days <= 10^9</p>
<p>1 <= meetings.length <= 10^5</p>
<p>meetings[i].length == 2</p>
<p>1 <= meetings[i][0] <= meetings[i][1] <= days</p>


### 예시

Example 1:
```
Input: days = 10, meetings = [[5,7],[1,3],[9,10]]

Output: 2

Explanation:

There is no meeting scheduled on the 4th and 8th days.
```

Example 2:
```
Input: days = 5, meetings = [[2,4],[1,3]]

Output: 1

Explanation:

There is no meeting scheduled on the 5th day.
```

Example 3:
```
Input: days = 6, meetings = [[1,6]]

Output: 0

Explanation:

Meetings are scheduled for all working days.
```

### 풀이 과정
회의 일정을 먼저 정렬해준 후 마지막 회의 정료일과 현재 회의 시작일 사이의 빈 날들을 계산한다.
### 개선 방법
First thing to do is sort the meeting with respect to the start day
keep track of min start and max end day
keep increasing the interval window till end is not less then next intervals start day
Once we find that case subtract the days of interval from the total days
Return the remaining days

```
var countDays = function (days, meetings) {
    meetings.sort((a, b) => a[0] - b[0])
    let res = days
    let start = meetings[0][0]
    let end = meetings[0][1]
    for (let [from, to] of meetings) {
        if (end >= to) continue
        if (end >= from) {
            end = to
            continue
        }
        res -= end - start + 1
        start = from
        end = to
    }
    return res - (end - start + 1)
};
```
