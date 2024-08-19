import sys
from collections import deque

input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N, M = map(int, input().split())

iceberg = [list(map(int, input().split())) for _ in range(N)]

# 이동 방향 (오른쪽, 아래, 왼쪽, 위)
move = [[0, 1], [1, 0], [0, -1], [-1, 0]]

# 빙산 녹이기
def melt_iceberg():
    melt_list = []  # 녹을 양 저장할 리스트
    
    for x in range(N):
        for y in range(M):
            if iceberg[x][y] > 0:
                melt = 0
                for dx, dy in move:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < N and 0 <= ny < M and iceberg[nx][ny] == 0:
                        melt += 1
                if melt > 0:
                    melt_list.append((x, y, melt))
    
    # 한 번에 녹이기
    for x, y, melt in melt_list:
        iceberg[x][y] -= melt
        if iceberg[x][y] < 0:
            iceberg[x][y] = 0

# 빙산 덩어리 세기
def count_iceberg_parts():
    visited = [[False] * M for _ in range(N)]
    parts = 0
    
    for x in range(N):
        for y in range(M):
            if iceberg[x][y] > 0 and not visited[x][y]:
                parts += 1
                queue = deque([(x, y)])
                visited[x][y] = True
                
                while queue:
                    cx, cy = queue.popleft()
                    for dx, dy in move:
                        nx, ny = cx + dx, cy + dy
                        if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and iceberg[nx][ny] > 0:
                            visited[nx][ny] = True
                            queue.append((nx, ny))
    
    return parts

year = 0
while True:
    parts = count_iceberg_parts()
    
    if parts >= 2:
        print(year)
        break
    
    if parts == 0:
        print(0)
        break
    
    melt_iceberg()
    
    year += 1
