import sys
input = sys.stdin.readline

N, B = map(int, input().split(" "))

test_case = []
for i in range(N):
	test_case.append(list(map(int, input().split())))

# 행렬 곱을 실행하는 함수
def mul_arr(arrA, arrB):
    answer_arr = [[0] * N for _ in range(N)]
    
    for i in range(N):
        for j in range(N):
            for k in range(N):
                answer_arr[i][j] += arrA[i][k] * arrB[k][j] 
    return answer_arr

# 행렬 각 원소를 1,000으로 나누어주는 함수
def div_arr(arr):
    for i in range(N):
        for j in range(N):
            arr[i][j] %= 1000
    return arr

# 최종적으로 결과를 출력하기 위한 함수 
def calc_matrix(n, arr):
    if n == 1:
        return div_arr(arr) 
    
    half = calc_matrix(n // 2, arr)
    
    if n % 2 == 0:
        return div_arr(mul_arr(half, half))
    else:
        return div_arr(mul_arr(mul_arr(half, half),arr))


result = calc_matrix(B, test_case)

for row in result:
    print(' '.join(map(str, row)))