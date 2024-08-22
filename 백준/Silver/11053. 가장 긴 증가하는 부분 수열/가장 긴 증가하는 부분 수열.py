import sys
input = sys.stdin.readline

N = int(input())
num_list = list(map(int, input().split()))
length_list = [1] * N

for i in range(1, N):
        for j in range(i):
            if num_list[j] < num_list[i]:
                length_list[i] = max(length_list[i], length_list[j] + 1)

answer = max(length_list)
print(answer)   