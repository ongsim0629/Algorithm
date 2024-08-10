N = int(input())

# 문제 풀이를 위한 비용 행렬 저장
cost_arr = [list(map(int, input().split())) for _ in range(N)]

# 크기가 N인 숫자 리스트 생성
path_list = list(range(N))
minimum_cost = float('inf')

# 숫자 리스트 셔플 -> 경로가 될 예정
def shuffle_path(list_size, shuffle_list, remaining):
    if list_size == N - 1:
        shuffle_list.append(remaining[0])
        # 처음 숫자 마지막에 한 번 더 추가 => 요런식 [0, 1, 2, 3, 0]
        shuffle_list.append(shuffle_list[0])
        calc_cost(shuffle_list, cost_arr)
        return
    
    for i in range(len(remaining)):
        current = remaining[i]
        new_remaining = remaining[:i] + remaining[i+1:]
        shuffle_path(list_size + 1, shuffle_list+[current], new_remaining) 

# 경로를 통한 비용 계산 w[i][j] -> if 0이면 그 경로는 그냥 패스
def calc_cost(path_list, cost_arr):
    sum = 0
    global minimum_cost
    
    for i in range(N):
        if cost_arr[path_list[i]][path_list[i+1]] == 0:
            return
        sum += cost_arr[path_list[i]][path_list[i+1]]
    
    minimum_cost = min(minimum_cost, sum)
# 비용 출력

shuffle_path(0, [], path_list)
print(minimum_cost)