import sys
input = sys.stdin.readline

N = int(input())

coordinate = [[None for i in range(2)] for j in range(N)]

for i in range(N):
    coordinate[i][0], coordinate[i][1] = map(int, input().split(" "))
    
# 좌표를 x축 기준으로 정렬
coordinate.sort()

# 나누어진 영역 내에서 거리의 최솟값을 구하는 함수
def calc_min_in_area(start, end):
    min_dist = float('inf')
    
    for i in range(start, end):
        for j in range(i + 1, end):
            distance = (coordinate[i][0] - coordinate[j][0])**2 + (coordinate[i][1] - coordinate[j][1])**2
            min_dist = min(min_dist, distance)
    
    return min_dist

def find_min_dist (start, end):
    size = end - start
    if size < 3:
        return calc_min_in_area(start, end)
    
    mid = (start + end) // 2
    
    left = find_min_dist(start, mid)
    right = find_min_dist(mid, end)
    
    min_dist = min(left,right)
    
    # 가운데 부분에 대한 탐색 진행 but min_dist 보다 큰 값들은 할 필요 없음
    check_point = []
    
    divide_x = coordinate[mid][0]
    for i in range(start, end):
        if (coordinate[i][0] - divide_x)**2 <= min_dist:
            check_point.append(coordinate[i])
    # y좌표 기준 오름차 순 정렬
    check_point.sort(key=lambda x:x[1])
    
    # y 좌표 기준 가장 아래에 있는 점 부터 영영 내의 다른 점들과 거리 계산
    for i in range(len(check_point)):
        now = check_point[i]
        for j in range(i+1, len(check_point)):
            compare = check_point[j]
            if (compare[1] - now[1])**2 >= min_dist:
                break
            dist = (now[0] - compare[0])**2 + (now[1] - compare[1])**2
            min_dist = min(min_dist, dist)
    
    return min_dist 

print(find_min_dist(0, N))