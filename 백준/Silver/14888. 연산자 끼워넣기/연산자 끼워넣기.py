N = int(input())
num_list = list(map(int, input().split()))
operator_num_list = list(map(int, input().split()))

max_result = -float('inf')
min_result = float('inf')

def dfs(depth, current_sum, plus, minus, multiply, divide):
    global max_result, min_result
    
    if depth == N:
        max_result = max(max_result, current_sum)
        min_result = min(min_result, current_sum)
        return
    
    if plus > 0:
        dfs(depth + 1, current_sum + num_list[depth], plus - 1, minus, multiply, divide)
    if minus > 0:
        dfs(depth + 1, current_sum - num_list[depth], plus, minus - 1, multiply, divide)
    if multiply > 0:
        dfs(depth + 1, current_sum * num_list[depth], plus, minus, multiply - 1, divide)
    if divide > 0:
        # Python에서 음수 나눗셈은 주의가 필요하므로 int()를 사용하여 정수 나눗셈을 처리
        dfs(depth + 1, int(current_sum / num_list[depth]), plus, minus, multiply, divide - 1)

# 초기 상태에서 DFS 시작
dfs(1, num_list[0], operator_num_list[0], operator_num_list[1], operator_num_list[2], operator_num_list[3])

print(max_result)
print(min_result)
