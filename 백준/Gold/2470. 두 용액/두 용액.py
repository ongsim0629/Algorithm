import sys
input = sys.stdin.readline

N = int(input())
liquid_list = list(map(int, input().split(" ")))
# 투 포인터 사용을 위한 정렬 
liquid_list.sort()

diff_max = float('inf')

# 포인터 시작 위치 지정
left = 0
right = len(liquid_list) - 1

answers = (liquid_list[left], liquid_list[right])
    
# 투 포인터를 사용하면 시간 복잡도가 감소하게 된다.
while left < right:
    current_sum = liquid_list[left] + liquid_list[right]
    # 0에 가깝다 -> 절댓값의 크기가 작다
    if abs(current_sum) < abs(diff_max):
        diff_max = current_sum
        answers = (liquid_list[left], liquid_list[right])
    
    if current_sum > 0 :
        right -= 1
    elif current_sum < 0 :
        left += 1
    else:
        break
        
    
    
print(answers[0], answers[1])