import heapq
import sys
input = sys.stdin.readline

n = int(input())
spots = []

for i in range(n):
    left_spot, right_spot = map(int, input().split())
    
    # 두 좌표에서 작은 값을 left_spot으로 오도록한다
    if left_spot > right_spot:
        left_spot, right_spot = right_spot, left_spot
    
    # 구간을 (right_spot, left_spot) 형태로 저장
    spots.append((right_spot, left_spot))

# 철로 길이 d 입력받기
d = int(input())

# right_spot 기준으로 정렬
spots.sort()
answer = 0
minimum_queue = []

for right_spot, left_spot in spots:
    # 현재 구간의 길이가 철로의 길이보다 작거나 같을때만 고려
    if right_spot - left_spot <= d:
        # 힙 안에 값이 존재하는데, 그 최솟값이 지금 오른쪽 위치에서 철로를 뺀 길이보다 더 멀리 떨어져 있으면
        # 즉, 지금 집 철로에 이전 집들의 left 값이 포함 안 되면
        # => 힙에서 현재 철로 범위에 포함되지 않는 구간들 계속 pop해서 제거
        while minimum_queue and minimum_queue[0] < right_spot - d:
            heapq.heappop(minimum_queue)
        # 지금 집 left 값 푸시
        heapq.heappush(minimum_queue, left_spot)
        # 현재 철로에 포함된 집들 최대 구함
        answer = max(answer, len(minimum_queue))

print(answer)
