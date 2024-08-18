import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N, M = map(int, input().split())
# 인덱스 번호 그냥 그대로 쓰려고 1개 더 만듬
visited = [False] * (N + 1)

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

def dfs(v, visited):
    visited[v] = True
    
    for neighbor in graph.get(v, []):
        if not visited[neighbor]:
            dfs(neighbor, visited)
            
def check_is_connected(visited):
    answer = 0
    
    # 얘도 0 건너뛰고 인덱스 그대로 -> 연결되어 있는 애들은 dfs 함수를 통해서 visited True로 바뀌어 있음
    # 연결 안 된 새로운 노드에 대해서 dfs 다 하고 나면 answer에 1 추가 되는 거임
    for i in range(1, N + 1):
        if not visited[i]:  # 방문하지 않은 노드가 있으면 DFS 시작
            dfs(i, visited)
            answer += 1
    return answer

print(check_is_connected(visited))
