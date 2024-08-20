import sys
from collections import deque
input = sys.stdin.readline

M, N, H = map(int, input().split())
# 상하좌우 및 위아래로의 이동을 포함한 6가지 방향 (x, y, z)
move = [(1, 0, 0), (-1, 0, 0), (0, 1, 0), (0, -1, 0), (0, 0, 1), (0, 0, -1)]
tomato = []

# 3차원 배열로 저장
for _ in range(H):
    layer = []
    for _ in range(N):
        layer.append(list(map(int, input().split())))
    tomato.append(layer)

# 익은 토마토가 있는 위치를 큐에 추가
# 출발점이 여러개인 문제는 모든 출발점을 큐에 넣어준다.
queue = deque()
for z in range(H):
    for y in range(N):
        for x in range(M):
            if tomato[z][y][x] == 1:  # 익은 토마토
                queue.append((x, y, z))

def bfs():
    while queue:
        x, y, z = queue.popleft()
        
        for dx, dy, dz in move:
            nx, ny, nz = x + dx, y + dy, z + dz
            
            # 좌표 범위가 유효한지 확인
            if 0 <= nx < M and 0 <= ny < N and 0 <= nz < H:
                # 토마토가 익지 않은 경우만 익게 처리
                if tomato[nz][ny][nx] == 0:
                    tomato[nz][ny][nx] = tomato[z][y][x] + 1
                    queue.append((nx, ny, nz))

bfs()

# 토마토가 다 익었는지 확인하고, 걸린 시간 계산
max_days = 0
for z in range(H):
    for y in range(N):
        for x in range(M):
            if tomato[z][y][x] == 0:  # 익지 않은 토마토가 남아 있는 경우
                print(-1)
                sys.exit(0)
            max_days = max(max_days, tomato[z][y][x])

# 처음 익은 상태가 1이므로 최종 답은 max_days - 1
print(max_days - 1)