import sys
input = sys.stdin.readline

N = int(input())

bar_list = [None] * N
for i in range(N):
    bar_list[i] = int(input())

# 제일 끝의 높이를 첫 번째 기준으로 선택
current_num = bar_list[-1]
count = 1

for i in range(N):
    # 뒤에서부터
    target_num = N - 1 - i
    # 지금 보이는 기둥보다 높으면 업데이트
    if current_num < bar_list[target_num] :
        count += 1
        current_num = bar_list[target_num]
    
print(count)