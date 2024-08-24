import sys
input = sys.stdin.readline

N, M = map(int, input().split())
small_stones = set(int(input()) - 1 for _ in range(M))  # 작은 돌의 위치를 집합으로 저장

# dp 리스트 초기화: dp[i]는 i번째 돌에서 도달할 수 있는 (점프 거리, 점프 횟수)의 딕셔너리
dp = [{} for _ in range(N)]
dp[0][0] = 0  # 첫 번째 돌에서 시작, (점프 거리 0, 점프 횟수 0)

for i in range(N):
    if i in small_stones:  # 작은 돌이면 건너뜀
        continue
    
    for k in list(dp[i].keys()):  # i번째 돌에서 가능한 점프 거리 k
        jumps = dp[i][k]
        for new_k in [k - 1, k, k + 1]:  # 다음 점프 거리 (k-1, k, k+1)
            next_stone = i + new_k
            if new_k > 0 and next_stone < N and next_stone not in small_stones:
                # 더 적은 점프 횟수로 도달할 수 있는 경우만 갱신
                if new_k not in dp[next_stone] or dp[next_stone][new_k] > jumps + 1:
                    dp[next_stone][new_k] = jumps + 1

# 마지막 돌에 도달할 수 있는지 확인
if dp[N - 1]:
    # 마지막 돌에 도달한 점프 횟수 중 최소 값을 출력
    print(min(dp[N - 1].values()))
else:
    print(-1)
