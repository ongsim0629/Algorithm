from collections import deque

N = int(input())

# 1부터 N까지의 숫자를 담은 리스트
num_list = deque(range(1,N+1))

while len(num_list) > 1 :
    num_list.popleft()
    value = num_list.popleft()
    num_list.append(value)
    
print(num_list[0])