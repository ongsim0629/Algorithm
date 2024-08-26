import sys
import bisect
input = sys.stdin.readline

N = int(input())
num_list = list(map(int, input().split()))
M = int(input())
target_list = list(map(int, input().split()))

# 500000 * 500000 -> 브루트 포스 불가능 -> 이분 탐색
num_list.sort()

# 각 target에 대해 num_list에서의 개수를 이분탐색으로 구하기
for target in target_list:
    left_index = bisect.bisect_left(num_list, target)
    right_index = bisect.bisect_right(num_list, target)
    
    print(right_index - left_index, end=" ")