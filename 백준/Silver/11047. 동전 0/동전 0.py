import sys
input = sys.stdin.readline

N, K = map(int, input().split())
coin_list = []
for _ in range(N):
    coin_list.append(int(input()))

# 큰 수가 작은 수의 배수이므로 -> 그냥 큰 수부터 쭈루룩 그리디 적용하면 된다.
available_coins = [coin for coin in coin_list if coin <= K]
available_coins.sort(reverse=True)

money = K
count = 0

# 모든 코인을 사용하여 최소 개수 계산
for coin in available_coins:
    if money == 0:
        break
    count += money // coin  # 현재 코인으로 최대한 사용할 수 있는 개수 더함
    money = money % coin     # 남은 금액 갱신

print(count)