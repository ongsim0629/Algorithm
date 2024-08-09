N = int(input())
num_list = []

for i in range(N):
    num_list.append(int(input()))

num_list.sort()

for item in num_list:
    print(item)