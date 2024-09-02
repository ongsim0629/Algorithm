import sys
from collections import deque

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    rank_list = list(map(int, input().split()))
    
    queue = deque([(rank, i) for i, rank in enumerate(rank_list)])
    
    count = 0
    
    while queue:
        current = queue.popleft()
        if any(current[0] < other[0] for other in queue):
            queue.append(current)
        else:
            count += 1
            if current[1] == M:
                print(count)
                break
