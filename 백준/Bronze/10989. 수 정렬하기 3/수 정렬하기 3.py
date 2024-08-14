import sys
input = sys.stdin.readline

N = int(input())

num_list = [0]*10001

for _ in range(N):
    num = int(input())
    num_list[num] += 1

for i in range(1, 10001):
    if num_list[i]:
        for j in range(num_list[i]):
            print(i)
