import sys
input = sys.stdin.readline

N, M = map(int, input().split())

items = []
for i in range(N):
    weight, value, num = map(int, input().split())
    k = 1
    # 이진수 분할
    while num >= k:
        items.append((weight * k, value * k))
        num -= k
        k *= 2
    if num > 0:
        items.append((weight * num, value * num))

# dp 테이블 초기화
dp = [0] * (M + 1)

# 각 아이템에 대해서 배낭 문제로 처리
for weight, value in items:
    for j in range(M, weight - 1, -1):
        dp[j] = max(dp[j], dp[j - weight] + value)
        
print(dp[M])
