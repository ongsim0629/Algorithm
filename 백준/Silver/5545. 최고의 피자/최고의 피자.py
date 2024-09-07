import sys
input = sys.stdin.readline

N = int(input())

A, B = map(int, input().split())
C = int(input())

topping_list = []
for _ in range(N):
    topping_list.append(int(input()))

# 열량이 높을수록 좋은 피자임
topping_list.sort(reverse=True)

calorie = C
money = A
max_answer = calorie // money

for i in range(N):
    calorie += topping_list[i]
    money += B
    if max_answer < (calorie // money):
        max_answer = calorie // money

print(max_answer)