import sys
input = sys.stdin.readline

K, N = map(int, input().split())

lan_list = []
for _ in range(K):
    lan_list.append(int(input()))

low, high = 1, max(lan_list)  # 최소 길이와 최대 길이 설정
answer = 0

def count_lans(length):
    count = 0
    for lan in lan_list:
        count += lan // length
    return count

while low <= high:
    # 이분탐색 ㄱㄱ
    mid = (low + high) // 2
    # 중간 길이로 자른 랜선 개수가 N 이상인 경우
    if count_lans(mid) >= N:
        answer = mid 
        low = mid + 1
    else:
        high = mid - 1
        
print(answer)