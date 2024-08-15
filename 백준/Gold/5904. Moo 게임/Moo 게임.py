N = int(input())
# moo 게임을 몇 번 진행해야 하는지 알려주는 함수
def calc_moo_num(number):
    i = 3
    count = 0
    while i < number:
        count += 1
        tmp = i * 2 + (count + 3)
        i = tmp
    return count
# moo 문자열의 길이를 계산하는 함수
def get_length(k):
    if k == 0:
        return 3  # S(0)의 길이
    return get_length(k - 1) * 2 + (k + 3)
# N번째 문자를 찾는 함수
def find_char(k, index):
    if k == 0:
        return "moo"[index - 1]  # S(0)에서 인덱스 반환
    length_left = get_length(k - 1)
    if index <= length_left:
        return find_char(k - 1, index)
    elif index > length_left + (k + 3):
        return find_char(k - 1, index - (length_left + (k + 3)))
    else:
        return 'm' if index == length_left + 1 else 'o'
# 필요한 moo 게임 수를 계산
game_num = calc_moo_num(N)
# N번째 문자 찾기
answer = find_char(game_num, N)
print(answer)