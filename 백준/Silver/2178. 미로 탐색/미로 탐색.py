import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())

maze = []
for _ in range(N):
    maze.append(list(map(int, input().strip())))

visited = [[False] * M for _ in range(N)]

# 오른쪽, 아래, 왼쪽, 위 (상하좌우)
move = [[0, 1], [1, 0], [0, -1], [-1, 0]]

# bfs는 최단거리를 보장한다.
def bfs(x, y):
    queue = deque([(x, y)])  # 시작점 큐에 추가
    visited[x][y] = True
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(4):
            new_x, new_y = x + move[i][0], y + move[i][1]
            # 인덱스 범위를 먼저 확인하고 나서 다른 조건을 체크
            if 0 <= new_x < N and 0 <= new_y < M and not visited[new_x][new_y] and maze[new_x][new_y] == 1:
                # 이동할 수 있는 칸만 큐에 추가하고 방문 처리
                queue.append((new_x, new_y))
                visited[new_x][new_y] = True
                maze[new_x][new_y] = maze[x][y] + 1  # 이동 거리 갱신

bfs(0, 0)

# 최종 목적지까지의 최단 거리 출력
print(maze[N-1][M-1])