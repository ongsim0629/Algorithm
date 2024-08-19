import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

# dfs에 색칠하기 기능 추가된 함수
def dfs(v, current_color):
    visited[v] = True
    # 현재 노드를 현재 색으로 칠함
    graph_color[v] = current_color
    
    for neighbor in graph.get(v, []):
        # 현재 노드의 이웃 노드 중 방문하지 않은 노드면 -> dfs 실행
        if not visited[neighbor]:
            # 근데 지금 칠한 노드와 인접한 노드이므로 다른 색으로 색칠해준다.
            result = dfs(neighbor, 1 - current_color)
            # 이 결과가 False 였으면 얘는 이분 그래프가 아님
            if result == False:
                return False
        # 현재 노드의 이웃 노드가 이미 방문된 노드인데 이미 같은 색으로 색칠된 경우였으면
        elif graph_color[neighbor] == current_color:
            # 얘는 이분 그래프가 아니다
            return False
    return True

K = int(input())

for i in range(K):
    V, E = map(int, input().split())
    graph = {}
    
    visited = [False] * (V + 1)
    # 방문 안 한 그래프는 -1이고, 방문된 그래프는 0 또는 1로 색칠
    graph_color = [-1] * (V + 1)
    
    for i in range(E):
        node1, node2 = map(int, input().split())
        
        if node1 in graph:
            graph[node1].append(node2)
        else:
            graph[node1] = [node2]
        
        if node2 in graph:
            graph[node2].append(node1)
        else:
            graph[node2] = [node1]
    
    #
    flag = True
    # 모든 노드를 탐색하기 위해서 for문 사용
    for i in range(1, V + 1):
        # 방문하지 않은 노드였으면 dfs 시작
        if not visited[i]:
            # 방문하지 않은 노드 0으로 색칠하면서 시작
            answer = dfs(i, 0)
            if answer == False:
                flag = False
                break
    
    if flag == True:
        print("YES")
    else:
        print("NO")