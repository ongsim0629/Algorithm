import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)  # RecursionError 제한

N = int(input())
visited = [False] * (N + 1)
parent = [i for i in range(N+1)]
graph = {}
for i in range(N-1):
    node1, node2 = map(int, input().split())
    
    if node1 in graph:
        graph[node1].append(node2)
    else:
        graph[node1] = [node2]
        
    if node2 in graph:
        graph[node2].append(node1)
    else:
        graph[node2] = [node1]

def dfs(v):
    visited[v] = True
    
    for neighbor in graph.get(v, []):
        if not visited[neighbor]:
            # dfs 탐색 하게 된 원인 -> 부모 이므로 v를 parent로 변경
            parent[neighbor] = v
            dfs(neighbor)

dfs(1)

# 부모 리스트 출력
for i in range(2,N+1):
    print(parent[i])