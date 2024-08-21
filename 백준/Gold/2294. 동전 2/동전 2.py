from collections import deque

N, K = map(int, input().split())
coins = [int(input()) for _ in range(N)]

# 인덱스만큼의 금액을 만들기 위해 필요한 최소 동전 개수 저장될 배열
visited = [-1] * (K + 1)
 # 0원을 만드는 데 필요한 동전 개수는 0
visited[0] = 0

# BFS 큐 초기화
queue = deque([0])

while queue:
    # 지금 돈에서
    current_amount = queue.popleft()

    # 가능한 동전 가치의 경우를 다 더해서 다음 금액으로 이동한다.
    for coin in coins:
        # 현재 돈에서 동전 가치를 더한게 다음 돈의 금액임
        # 예를 들면 0원에서 동전 가치 1 더해진 1원이 다음 돈의 금액
        next_amount = current_amount + coin
        # K보다 작은 금액이고 방문하지 않았었던 금액이면
        if next_amount <= K and visited[next_amount] == -1:
            # 최소 동전 개수 갱신 (동전 가치 1개만 더해서 나온 결과 이므로 +1)
            visited[next_amount] = visited[current_amount] + 1
            queue.append(next_amount)
            
            # 목표 금액에 도달했으면 바로 종료
            if next_amount == K:
                print(visited[next_amount])
                exit()

# 목표 금액을 만들 수 없는 경우
print(-1)