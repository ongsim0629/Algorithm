import sys
input = sys.stdin.readline

M, N, L = map(int, input().split(" "))
kill_count = 0

# 사대 위치 x 좌표 기준 정렬
shooting_zone = list(map(int, input().split(" ")))
shooting_zone.sort()

animal_coord = [[None for j in range(2)] for i in range(N)]

for i in range(N):
    animal_coord[i][0], animal_coord[i][1] = map(int, input().split(" "))

# 사대 위치 기준으로 이분 탐색해주므로 사대만 정렬해주면 될 듯?
# # 동물 위치 리스트 x 기준, x가 같다면 y 기준 오름차순 정렬
# animal_coord.sort(key = lambda x : (x[0],x[1]))
count = 0

def calc_length(length, animal_list):
    global count
    for x, y in animal_list:
        if y > length:
            continue
        
        start = 0
        end = M - 1
        
        # 절댓값에 의해서 사냥 가능한 사대의 x 위치가 정렬된다
        min = x+y-length
        max = x-y+length
        
        # 이분 탐색 시작
        while start <= end:
            mid = (start + end) // 2
            # 사냥 가능한 사대의 위치에 mid가 존재했다면 이 동물은 사냥 가능함
            if min <= shooting_zone[mid] <= max:
                count += 1
                break
            # 동물을 잡을 수 있는 최소 범위보다 가까운 곳에 사대가 위치할 때
            elif shooting_zone[mid] < min:
                # 더 오른쪽에 위치한 사대에 대해서 탐색하기
                start = mid + 1
            # 동물을 잡을 수 있는 최대 범위보다 먼 곳에 사대가 위치할 때
            else:
                # 더 왼쪽에 위치한 사대에 대해서 탐색하기
                end = mid -1

calc_length(L, animal_coord)
print(count)
            
    