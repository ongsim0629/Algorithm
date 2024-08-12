N = int(input())
n_list = list(map(int,input().split(" ")))
#이진 탐색을 위해서 먼저 정렬이 선행적으로 이루어져야한다.
n_list.sort()

M = int(input())
m_list = list(map(int, input().split(" ")))
find_list = [0] * M

def find_num_in_list(num_list, target):
    start = 0
    end = len(num_list) - 1
    
    while start <= end:
        mid = (start + end) // 2
        
        if num_list[mid] == target:
            return True
        elif num_list[mid] > target:
            end = mid - 1
        else : 
            start = mid + 1
    return 
    

for i in range(M):
    if find_num_in_list(n_list, m_list[i]) == True:
        find_list[i] = 1
    
    print(find_list[i])