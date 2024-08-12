N, r, c = map(int, input().split(" "))

def calc_z(size, row, col):
    # 2**n이 1 => n이 0인 경우 => (0,0)
    if size == 1:
        return 0
    
    # size를 반으로 나눈 것을 기준으로 해서 계산 진행
    if row < size // 2 and col < size // 2 :  # 1사분면
        return calc_z(size // 2, row, col)
    elif row < size // 2 and col >= size // 2:  # 2사분면
        return (size // 2) * (size // 2) + calc_z(size // 2, row, col - size // 2)
    elif row >= size // 2 and col < size // 2:  # 3사분면
        return 2 * size // 2 * size // 2 + calc_z(size // 2, row - size // 2, col)
    else:  # 4사분면
        return 3 * size // 2 * size // 2 + calc_z(size // 2, row - size // 2, col - size // 2)

answer = calc_z(2 ** N, r, c)

print(answer)