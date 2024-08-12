import sys
input = sys.stdin.readline

N, C = map(int, input().split(" "))

loc_list = [None] * N
for i in range(N):
    loc_list[i] = int(input())

# 위치 리스트 정렬
loc_list.sort()

# 집들이 서로 붙어 있는 경우
start = 1 
# 공유기 간 최대 거리는 최대 좌표 - 최소 좌표
end = loc_list[-1] - loc_list[0]

# 주어진 거리로 C개의 공유기를 설치할 수 있는 지 확인하는 함수
def can_install_routers(distance):
    count = 1  # 첫 번째 집에는 무조건 설치
    last_installed = loc_list[0]  # 첫 번째 집에 설치

    for i in range(1, N):
        if loc_list[i] - last_installed >= distance:
            count += 1
            last_installed = loc_list[i]
            if count >= C:  # C개 이상의 공유기를 설치했다면 True 반환
                return True
    
    return False  # C개 이상의 공유기를 설치할 수 없으면 False 반환

result = 0
while start <= end:
    mid = (start + end) // 2
    if can_install_routers(mid):
        result = mid  # 가능한 거리일 때 갱신
        start = mid + 1  # 더 큰 거리를 시도
    else:
        end = mid - 1  # 거리를 줄여서 다시 시도

print(result)