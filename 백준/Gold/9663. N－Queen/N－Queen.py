N = int(input())

position = [0] * N
# 행 체크
flag_row = [False] * N
flag_b = [False] * (2 * N - 1)  # 왼쪽 위에서 오른쪽 아래(/) 대각선 체크
flag_c = [False] * (2 * N - 1)  # 왼쪽 아래에서 오른쪽 위(\) 대각선 체크
answer = 0

def set_n_queen(number):
    global answer
    for i in range(N):
        if (not flag_row[i] and not flag_b[number - i + N - 1] and not flag_c[number + i]):
            position[number] = i
            if number == N - 1:
                answer += 1
            else:
                flag_row[i] = flag_b[number - i + N - 1] = flag_c[number + i] = True
                set_n_queen(number + 1)
                flag_row[i] = flag_b[number - i + N - 1] = flag_c[number + i] = False

set_n_queen(0)
print(answer)
