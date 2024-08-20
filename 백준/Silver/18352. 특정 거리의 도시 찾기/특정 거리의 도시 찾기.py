import sys
from collections import deque
input = sys.stdin.readline

N, M, K, X = map(int, input().split())

graph = {i: [] for i in range(1, N+1)}

for i in range(M):
    start, end = map(int, input().split())
    graph[start].append(end)

# X로부터 인덱스까지의 거리를 저장할 배열
distance_list = [-1] * (N+1)

def bfs(start):    
    queue = deque([start])
    # 시작 도시의 거리를 0으로 두고
    distance_list[start] = 0
    
    while queue:
        city = queue.popleft()
        # 현재 도시와 도로가 연결돼있는데 
        for next_city in graph.get(city, []):
            # 방문하지 않은 도시이면
            if distance_list[next_city] == -1:
                # 현재 도시에 +1을 해서 거리를 표시해준다.
                distance_list[next_city] = distance_list[city] + 1
                queue.append(next_city)

bfs(X)

flag = False

for index, dist in enumerate(distance_list):
    if dist == K:
        flag = True
        print(index)
    
if flag == False:
    print(-1)