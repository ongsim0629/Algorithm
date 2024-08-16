from collections import deque
N, K = map(int, input().split())

num_list = deque(range(1,N+1))
answer = []
count = 0

while len(num_list) >= 3:
    for i in range(K-1):
        value = num_list.popleft()
        num_list.append(value)
    answer.append(num_list.popleft())
    
if len(num_list) >= 2:
    if K % 2 == 0 :
        answer.append(num_list[1])
        answer.append(num_list[0])
    else:     
        answer.append(num_list[0])
        answer.append(num_list[1])
else:
    answer.append(num_list[0])
    
print("<" + ", ".join(list(map(str, answer))) + ">")