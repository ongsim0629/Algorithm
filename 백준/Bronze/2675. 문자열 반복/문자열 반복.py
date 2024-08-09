T = int(input())

for i in range(T):
    R, testcase = input().split(" ")
    R = int(R)
    str_list = list(testcase)
    answer = ''
    for j in range(len(str_list)):
        answer += str_list[j] * R
    print(answer)