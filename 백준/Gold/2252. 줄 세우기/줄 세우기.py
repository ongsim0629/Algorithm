import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())

in_list  = {i: [] for i in range(1, N + 1)}
out_list = {i: [] for i in range(1, N + 1)}

for i in range(M):
    little, high = map(int, input().split())
    in_list[high].append(little)
    out_list[little].append(high)

queue = deque()
answer_list = []

for i in range(1,N+1):
    if in_list[i] == []:
        queue.append(i)

while queue:
    target = queue.popleft()
    answer_list.append(target)
    
    for neighbor in out_list[target]:
        in_list[neighbor].remove(target)
        
        if in_list[neighbor] == []:
            queue.append(neighbor)

print(*answer_list[:], sep=' ')
    