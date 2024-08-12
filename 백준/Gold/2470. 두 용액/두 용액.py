import sys
input = sys.stdin.readline

N = int(input())
liquid_list = list(map(int, input().split(" ")))
liquid_list.sort()

diff_max = float('inf')

left = 0
right = len(liquid_list) - 1
answers = (liquid_list[left], liquid_list[right])
    
# 투 포인터를 사용해야한다.
while left < right:
    current_sum = liquid_list[left] + liquid_list[right]
    
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