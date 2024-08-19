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
    result = 0
    
    for neighbor in graph[v]:
        if not visited[neighbor]:
            # 실내 노드를 만났을 때 경로를 추가
            if place_list[neighbor] == 1:
                result += 1
            # 실외 노드는 계속 탐색한다.
            elif place_list[neighbor] == 0:
                result += dfs(neighbor, visited)
    return result

total_result = 0

for i in range(1, N + 1):
    if place_list[i] == 1:
        visited = [False] * (N + 1)
        total_result += dfs(i, visited)

print(total_result)