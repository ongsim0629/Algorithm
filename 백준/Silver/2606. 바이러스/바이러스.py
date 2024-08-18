import sys
from collections import deque
input = sys.stdin.readline

num_of_computers = int(input())
connected_pair = int(input())
visited = [False] * (num_of_computers + 1)

# 인접 리스트로 그래프 표현
graph = {}
for _ in range(connected_pair):
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

def check_virus_bfs(v, visited):
    queue = deque([v])
    visited[v] = True
    answer = 0
    
    while queue:
        node = queue.popleft()
        
        for neighbor in graph.get(node, []):
            if not visited[neighbor]:
                queue.append(neighbor)
                visited[neighbor] = True
                answer += 1
    return answer

print(check_virus_bfs(1, visited))