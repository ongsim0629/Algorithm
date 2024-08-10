N = int(input())

shuffle_list = []
num_list = list(map(lambda x: int(x), input().split(" ") ))
answer = 0

# 브루트포스로 순서 바꾸기 -> 현재 몇 개 선택했는지, 섞은 리스트, 남은 선택할 것들 담긴 리스트
def shuffle_num_list(k, shuffle_list, remaining) :
    # 섞은 리스트 완성되면 -> 차이의 합을 구하는 함수 실행
    if k == N-1:
        shuffle_list.append(remaining[0])
        #shuffle_list -> [20, 8, 15, 10, 4, 1] ...
        calc_diff(shuffle_list)
        return
        
    # num_list에서 숫자 선택해서 shuffle_list 채우기 -> 사용된 숫자 사용 X
    for i in range(len(remaining)):
        current = remaining[i]
        new_remaining = remaining[:i] + remaining[i+1:]
        shuffle_num_list(k+1, shuffle_list+[current], new_remaining)
        
# 차이의 합 구하는 식 작성
def calc_diff(arr):
    sum = 0
    global answer
    for i in range(N-1):
        sum += abs(arr[i]-arr[i+1])
    answer = max(answer, sum)
    return
# 차이의 합의 최댓값 출력 max이용()

shuffle_num_list(0, [], num_list)
print(answer)
