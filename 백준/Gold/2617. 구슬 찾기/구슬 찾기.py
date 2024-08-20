import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N, M = map(int, input().split())

# DFS 함수
def dfs(node, graph, visited):
    visited[node] = True
    count = 1  # 현재 노드도 포함
    for neighbor in graph[node]:
        if not visited[neighbor]:
            count += dfs(neighbor, graph, visited)
    return count

heavy_graph = [[] for _ in range(N + 1)]
light_graph = [[] for _ in range(N + 1)]

# 그래프 구성
for _ in range(M):
    heavy, light = map(int, input().split())
    heavy_graph[heavy].append(light)  # 무거운 구슬 -> 가벼운 구슬
    light_graph[light].append(heavy)  # 가벼운 구슬 -> 무거운 구슬


answer = 0
half = (N + 1) // 2  # 절반 이상의 구슬과 비교

for i in range(1, N + 1):
    visited = [False] * (N + 1)
    heavy_count = dfs(i, heavy_graph, visited) - 1  # i보다 가벼운 구슬의 개수

    visited = [False] * (N + 1)
    light_count = dfs(i, light_graph, visited) - 1  # i보다 무거운 구슬의 개수

    # 절반 이상이면 중간에 위치할 수 없음
    if heavy_count >= half or light_count >= half:
        answer += 1

print(answer)