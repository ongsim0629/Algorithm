import sys
input = sys.stdin.readline

N = int(input())

num_list = [None]*N
for i in range(N):
    num_list[i] = int(input())

def merge(arr1, arr2):
    answer_list = []
    i, j = 0, 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            answer_list.append(arr1[i])
            i += 1
        else:
            answer_list.append(arr2[j])
            j += 1
    
    # 남은 요소들을 추가합니다.
    while i < len(arr1):
        answer_list.append(arr1[i])
        i += 1
    
    while j < len(arr2):
        answer_list.append(arr2[j])
        j += 1

    return answer_list

    
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        mid = len(arr) // 2
        left_arr = merge_sort(arr[:mid])
        right_arr = merge_sort(arr[mid:])
        return merge(left_arr, right_arr)
        
sorted_list = merge_sort(num_list)

# 결과 출력
for num in sorted_list:
    print(num)