import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
M = int(input())

toy = {i: [] for i in range(1, N + 1)}
in_degree = [0] * (N + 1)
requirements = [[0] * (N + 1) for _ in range(N + 1)] 

for i in range(M):
    X, Y, K = map(int, input().split())
    toy[Y].append((X, K))
    in_degree[X] += 1

queue = deque()

for i in range(1, N + 1):
    if in_degree[i] == 0:
        queue.append(i)

while queue:
    part = queue.popleft()
    
    for next_part, count in toy[part]:
        # 0이 N+1개다 -> 얘를 만드는데 필요한 부품이 없다 -> 기본 부품
        if requirements[part].count(0) == N + 1:
            requirements[next_part][part] += count
        else:
            # 기본 부품이 아닌경우
            for i in range(1, N + 1):
                requirements[next_part][i] += requirements[part][i] * count  # 기본 부품 아닌 경우
        
        in_degree[next_part] -= 1
        if in_degree[next_part] == 0:
            queue.append(next_part)

for i in range(1, N + 1):
    if requirements[N][i] > 0:
        print(i, requirements[N][i])