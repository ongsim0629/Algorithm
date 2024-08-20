import sys
from collections import deque
input = sys.stdin.readline

R, C = map(int, input().split())
move = [[1,0],[0,1],[-1,0],[0,-1]]
map = []
for i in range(R):
    map.append(list(input().strip()))

# 방문 여부를 체크하는 배열
visited = [[False] * C for _ in range(R)]

water_queue = deque()
dochi_queue = deque()

for i in range(R):
    for j in range(C):
        if map[i][j] == 'S':  # 고슴도치의 시작 위치
            dochi_queue.append((i, j, 0))  # (x, y, 이동시간)
            visited[i][j] = True
        elif map[i][j] == '*':  # 물이 있는 위치
            water_queue.append((i, j))

# BFS 함수
def bfs():
    while dochi_queue:
        # 1. 물의 확장 처리
        for _ in range(len(water_queue)):
            wx, wy = water_queue.popleft()
            for dx, dy in move:
                nx, ny = wx + dx, wy + dy
                if 0 <= nx < R and 0 <= ny < C and map[nx][ny] == '.':
                    map[nx][ny] = '*'
                    water_queue.append((nx, ny))

        # 2. 고슴도치의 이동 처리
        for _ in range(len(dochi_queue)):
            hx, hy, time = dochi_queue.popleft()
            for dx, dy in move:
                nx, ny = hx + dx, hy + dy
                if 0 <= nx < R and 0 <= ny < C:
                    if map[nx][ny] == 'D':  # 비버의 굴에 도착
                        return time + 1
                    if map[nx][ny] == '.' and not visited[nx][ny]:
                        visited[nx][ny] = True
                        dochi_queue.append((nx, ny, time + 1))

    return "KAKTUS"  # 고슴도치가 비버의 굴에 도달할 수 없는 경우

# 결과 출력
print(bfs())