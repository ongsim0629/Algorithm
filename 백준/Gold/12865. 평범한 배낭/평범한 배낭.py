import sys
input = sys.stdin.readline

N, K = map(int, input().split())

item_list = []
for i in range(N):
    weight, value = map(int, input().split())
    item_list.append([weight, value])

#dp 테이블 초기화 : dp[i][j] -> 배낭 무게가 j일 때, 아이템 i로 얻을 수 있는 최대 이득
dp = [[0] * (K + 1) for _ in range(N + 1)]

for i in range(1,N+1):
    weight = item_list[i-1][0]
    value = item_list[i-1][1]
    for j in range(1, K + 1):
        if weight > j:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j], value + dp[i-1][j-weight])
            
print(dp[N][K])