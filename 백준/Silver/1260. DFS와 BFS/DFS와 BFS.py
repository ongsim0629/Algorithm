import sys
from collections import deque

input = sys.stdin.readline

N, M, V = map(int, input().split())

# 인접 리스트로 그래프 표현
graph = {}
for _ in range(M):
    node1, node2 = map(int, input().split())
    
    # node1에 node2 추가
    if node1 in graph:
        graph[node1].append(node2)
    else:
        graph[node1] = [node2]
    
    # node2에 node1 추가
    if node2 in graph:
        graph[node2].append(node1)
    else:
        graph[node2] = [node1]

# 각 노드의 연결 리스트를 오름차순으로 정렬
for node in graph:
    graph[node].sort()

def dfs(v, visited):
    visited[v] = True
    print(v, end=' ')
    
    for neighbor in graph.get(v, []):
        if not visited[neighbor]:
            dfs(neighbor, visited)

def bfs(v, visited):
    queue = deque([v])
    visited[v] = True
    
    while queue:
        # 푸시된 애들 순서대로 pop -> 이웃애들 먼저 pop된다
        node = queue.popleft()
        print(node, end=' ')
        
        for neighbor in graph.get(node, []):
            if not visited[neighbor]:
                # 큐에 이웃 애들 다 푸시하고
                queue.append(neighbor)
                visited[neighbor] = True

# 방문 리스트 초기화
visited_dfs = [False] * (N + 1)
visited_bfs = [False] * (N + 1)

# DFS 실행
dfs(V, visited_dfs)
print()
bfs(V, visited_bfs)