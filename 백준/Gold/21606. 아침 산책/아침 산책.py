import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N = int(input())
str = input()
place_list = [0] * (N + 1)

for index,char in enumerate(str):
    if char == '1':
        place_list[index+1] = 1

graph = {}

for i in range(1, N):
    node1, node2 = map(int, input().split())
    
    if node1 in graph:
        graph[node1].append(node2)
    else:
        graph[node1] = [node2]
    if node2 in graph:
        graph[node2].append(node1)
    else:
        graph[node2] = [node1]

def dfs(v, visited):
    visited[v] = True
    indoor_count = 0
    outdoor_neighbors = []

    # 연결된 노드 탐색
    for neighbor in graph[v]:
        if not visited[neighbor]:
            if place_list[neighbor] == 1:  # 실내 노드
                indoor_count += 1
            elif place_list[neighbor] == 0:  # 실외 노드
                outdoor_neighbors.append(neighbor)
    
    # 실외 노드들을 탐색하여 연결된 실내 노드 수를 세기
    for outdoor in outdoor_neighbors:
        indoor_count += dfs(outdoor, visited)
    
    return indoor_count

total_result = 0
visited = [False] * (N + 1)

# 실내 노드를 시작으로 탐색
for i in range(1, N + 1):
    if place_list[i] == 1:  # 실내 노드에서 시작
        for neighbor in graph[i]:
            if place_list[neighbor] == 0 and not visited[neighbor]:  # 인접한 실외 노드 탐색
                connected_indoor_count = dfs(neighbor, visited)
                total_result += connected_indoor_count * (connected_indoor_count - 1)  # 경로 계산

# 실내 노드끼리 직접 연결된 경우 처리
for i in range(1, N + 1):
    if place_list[i] == 1:  # 실내 노드
        for neighbor in graph.get(i, []):
            if place_list[neighbor] == 1:  # 다른 실내 노드와 직접 연결된 경우
                total_result += 1

print(total_result)