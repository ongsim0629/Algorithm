import sys
input = sys.stdin.readline

N, M = map(int, input().split())
height_list = list(map(int, input().split()))

def find_max_height(shortest, highest, target_list):
    start = shortest
    end = highest
    result = 0
    
    while start <= end:
        mid = (start + end) // 2
        total_tree_length = sum(height - mid if height > mid else 0 for height in target_list)
        
        if total_tree_length < M:
            end = mid - 1
        else:
            result = mid
            start = mid + 1
    
    return result
            
print(find_max_height(0, max(height_list), height_list))