import sys
input = sys.stdin.readline

N, K = map(int, input().split(" "))

level_list = [None]*N

for i in range(N):
    level_list[i] = int(input())

start = min(level_list)
end = max(level_list) + K

def calc_max_level():
    global start, end
    
    while start <= end:
        mid = (start + end) // 2
        sum_needed = 0
        
        for item in level_list:
            if item < mid:
                sum_needed += (mid - item)
        
        if sum_needed <= K:
            # 경험치가 충분하면 더 높은 레벨을 시도
            start = mid + 1
        else:
            # 경험치가 부족하면 더 낮은 레벨을 시도
            end = mid - 1
    
    return end

# 최종적으로 calc_max_level 함수의 반환값이 최대 레벨
print(calc_max_level())