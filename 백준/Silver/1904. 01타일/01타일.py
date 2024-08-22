N = int(input())

tile_num = [-1] * (N + 1)

def calc_tile(number):
    if number == 1:
        return 1
    elif number == 2:
        return 2

    # 한 자리수 만들 수 있는 방법 1개
    tile_num[1] = 1
    # 두 자리수 만들 수 있는 방법 2개
    tile_num[2] = 2
    # 세자리 수 만들 수 있는 방법 -> 한 자리수 + 두 자리수
    for i in range(3, N + 1):
        # 메모리 초과 안 나게 그냥 저장할 떄 부터 작게 저장
        tile_num[i] = (tile_num[i-1] + tile_num[i-2]) % 15746
    return tile_num[i]

answer = calc_tile(N)
print(answer)