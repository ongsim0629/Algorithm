import sys
input = sys.stdin.readline

N, M = map(int, input().split())
small_stones = set(int(input()) - 1 for _ in range(M))  # 작은 돌의 위치를 집합으로 저장

# dp 리스트 초기화: dp[i]는 i번째 돌에 도달할 때의 (점프 거리, 그 점프거리를 사용해서 돌에 도달한 최소 점프 횟수)의 딕셔너리
dp = [{} for _ in range(N)]
dp[0][0] = 0  # 첫 번째 돌에서 시작, (점프 거리 0, 점프 횟수 0)

for i in range(N):
    if i in small_stones:  # 작은 돌이면 건너뜀
        continue
    
    for k in list(dp[i].keys()):  # i번째 돌에서 가능한 점프 거리 k
        # 그 가능한 점프 거리로 도착 했을 때의 최소 횟수 (몇 번 점프?)
        jumps = dp[i][k]
        # 다음에 가능한 점프 거리 (k-1, k, k+1)
        for new_k in [k - 1, k, k + 1]:
            # 가능한 점프 거리로 도착하는 돌의 인덱스
            next_stone = i + new_k
            # 기본적인 제한 조건 만족하는지
            if new_k > 0 and next_stone < N and next_stone not in small_stones:
                # 새 점프거리로 이전에 이 돌에 온 적이 없었었는지, 이전 최소 점프 기록보다 작은지, 
                if new_k not in dp[next_stone] or dp[next_stone][new_k] > jumps + 1:
                    dp[next_stone][new_k] = jumps + 1

# 마지막 돌에 도달할 수 있는지 확인
if dp[N - 1]:
    # 마지막 돌에 도달한 점프 횟수 중 최소 값을 출력
    print(min(dp[N - 1].values()))
else:
    print(-1)