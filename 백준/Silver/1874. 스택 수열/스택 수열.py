import sys
input = sys.stdin.read

data = input().split()
n = int(data[0])
num_list = list(map(int, data[1:]))

stack = []
answer = []
last_num = 0
flag = True

for target in num_list:
    if last_num < target:
        for num in range(last_num + 1, target + 1):
            stack.append(num)
            answer.append('+')
        last_num = target

    if stack[-1] == target:
        stack.pop()
        answer.append('-')
    else:
        print('NO')
        flag = False
        break

if flag:
    print('\n'.join(answer))
