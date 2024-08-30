N = int(input())

matrix = []
for _ in range(N):
    matrix.append(list(map(int,input().split())))

count_0 = 0
count_1 = 0 
count_11 = 0

def all_same(arr):
    state = arr[0][0]
    for row in arr:
        for item in row:
            if item != state:
                return False
    return True

def recursion(arr,size):
    global count_0, count_1, count_11
    
    if all_same(arr):
        if arr[0][0] == 0:
            count_0 += 1
        elif arr[0][0] == 1:
            count_1 += 1
        elif arr[0][0] == -1:
            count_11 += 1
    else:
        new_size = size // 3
        for i in range(3):
            for j in range(3):
                new_arr = [row[j*new_size:(j+1)*new_size] for row in arr[i*new_size:(i+1)*new_size]]
                recursion(new_arr, new_size)

recursion(matrix, N)

print(count_11)
print(count_0)
print(count_1)
            