import sys
input = sys.stdin.readline

T = int(input())
K = int(input())
coin_list = []
# dp 테이블 -> dp[i]를 동전 몇 개로 만들 수 있는 지 담을 예정
dp = [0] * (T + 1)
# 0원 만드는 방법 1가지
dp[0] = 1

for i in range(K):
    value, num = map(int, input().split())
    coin_list.append((value,num))

for value, num in coin_list:
    for i in range(T, 0, -1):  # 거꾸로 순회를 해야 중복을 막을 수 있음
        for j in range(1, num + 1):
            if i - value * j >= 0:
                dp[i] += dp[i - value * j]

print(dp[T])