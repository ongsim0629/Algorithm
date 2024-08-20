import sys
from collections import deque
input = sys.stdin.readline

n = int(input())

maze = []
for i in range(n):
    maze.append(list(map(int, input().strip())))

# 최소한의 벽을 부수는 비용을 기록하는 리스트
visited =  [[float('inf')] * n for _ in range(n)]
move = [[1, 0], [0, 1], [-1, 0], [0, -1]]

def bfs(x, y):
    queue = deque([(x, y)])
    visited[x][y] = 0
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(4):
            new_x, new_y = x + move[i][0], y + move[i][1]
            
            if 0 <= new_x < n and 0 <= new_y < n:
                # 벽을 부수는 경우
                if maze[new_x][new_y] == 0 and visited[new_x][new_y] > visited[x][y] + 1:
                    visited[new_x][new_y] = visited[x][y] + 1
                    queue.append((new_x, new_y))
                # 벽을 부수지 않는 경우
                elif maze[new_x][new_y] == 1 and visited[new_x][new_y] > visited[x][y]:
                    visited[new_x][new_y] = visited[x][y]
                    queue.appendleft((new_x, new_y))  # 벽을 부수지 않은 경우를 우선 처리

bfs(0, 0)
print(visited[n-1][n-1])