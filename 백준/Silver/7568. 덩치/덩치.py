import sys
input = sys.stdin.readline

N = int(input())
num_list = []
for _ in range(N):
    weight, height = map(int, input().split())
    num_list.append([weight,height])

for i in range(N):
    count = 1
    for j in range(N):
        if num_list[i][0] < num_list[j][0] and num_list[i][1] < num_list[j][1]:
            count+=1
    print(count, end=" ") 