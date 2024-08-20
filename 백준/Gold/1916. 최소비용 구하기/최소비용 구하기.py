import sys
import heapq

input = sys.stdin.readline

N = int(input())
M = int(input())

# 그래프 초기화
graph = {i: [] for i in range(1, N + 1)}

for _ in range(M):
    start, end, cost = map(int, input().split())
    graph[start].append((end, cost))

start, end = map(int, input().split())

# 최소 비용을 저장할 리스트, 무한대 값으로 초기화
min_cost = [float('inf')] * (N + 1)
min_cost[start] = 0

# 우선순위 큐를 사용한 다익스트라 알고리즘
queue = [(0, start)]  # (비용, 현재 노드)
while queue:
    current_cost, current_node = heapq.heappop(queue)
    
    # 현재 노드까지의 비용이 이미 기록된 비용보다 크면 무시
    if current_cost > min_cost[current_node]:
        continue
    
    # 현재 노드와 연결된 모든 노드를 탐색
    for neighbor, cost in graph[current_node]:
        total_cost = current_cost + cost
        
        # 더 적은 비용으로 이웃 노드에 도달할 수 있는 경우 갱신
        if total_cost < min_cost[neighbor]:
            min_cost[neighbor] = total_cost
            heapq.heappush(queue, (total_cost, neighbor))

# 결과 출력
print(min_cost[end] if min_cost[end] != float('inf') else -1)
