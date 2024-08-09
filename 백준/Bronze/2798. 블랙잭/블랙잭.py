N, M = [int(x) for x in input().split(" ")]

num_list = [int(x) for x in input().split(" ")]

sum_list = []

for i in range(N):
    for j in range(i+1, N):
        for k in range(j+1, N):
            sum_list.append(num_list[i]+num_list[j]+num_list[k])

diff_list = []
for item in sum_list:
    if item - M <= 0 :
        diff_list.append(abs(item-M))

diff_list.sort()

print(M-diff_list[0])