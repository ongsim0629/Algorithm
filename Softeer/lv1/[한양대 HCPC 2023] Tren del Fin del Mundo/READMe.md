# 개선 가능한 부분
input 처리 받을 때 그냥 다 line.split(' ')으로 처리하기.
```
input.push(line.split(' ').map(Number));
```
최댓값을 그냥 첫 좌표의 y좌표로 해도 됐을 것 같다.
