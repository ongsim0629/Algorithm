white_list = list(map(int, input().split()))

answer_list = [1, 1, 2, 2, 2, 8]

for i in range(6):
    answer = answer_list[i] - white_list[i]
    print(answer, end = " ")