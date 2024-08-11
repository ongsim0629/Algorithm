import sys
input=sys.stdin.readline

N = int(input())

# 숫자 담을 리스트 만들기
num_list = [None] * N

for i in range(N):
    num_list[i] = int(input())

def merge_sort(arr):
    if len(arr) < 2:
        return arr

    mid = len(arr) // 2
    low_arr = merge_sort(arr[:mid])
    high_arr = merge_sort(arr[mid:])

    merged_arr = []
    l = h = 0
    while l < len(low_arr) and h < len(high_arr):
        if low_arr[l] < high_arr[h]:
            merged_arr.append(low_arr[l])
            l += 1
        else:
            merged_arr.append(high_arr[h])
            h += 1
    merged_arr += low_arr[l:]
    merged_arr += high_arr[h:]
    return merged_arr
    

sorted = merge_sort(num_list)

for i in range(N):
    print(sorted[i])