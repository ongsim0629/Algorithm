# 요소의 개수가 홀수 -> 정확히 가운데 값
# 요소의 개수가 짝수 -> 가운데 값 두 개 중 작은 값
import sys
import heapq
input = sys.stdin.readline

N = int(input())
# 최대 힙 -> 중간값 이하의 값들을 관리
left_queue = []
# 최소 힙 -> 중간값 이상의 값들을 관리
right_queue = []
# 즉 -> 두 힙의 루트 노드가 중간값의 후보임

for i in range(N):
    number = int(input())

    # 최대 힙 안에 값들이 있을 때
    if left_queue:
        # 최대 힙의 루트 노드보다 작으면
        if number <= -left_queue[0]:
            # 최대 힙에 푸시
            heapq.heappush(left_queue, -number)
        # 최대 힙의 루트 노드보다 크면
        else:
            # 최소 힙에 푸시
            heapq.heappush(right_queue, number)        
    # left_queue가 비어있으면 일단 값을 집어넣어줌
    else:
        heapq.heappush(left_queue, -number)
    
    # 만약에 최대 힙의 길이가 최소 힙의 길이 +1 보다 크면
    # 조절을 해줘야지 최대 힙의 루트 노드가 중간값으로 볼 수 있음
    if len(left_queue) > len(right_queue) + 1:
        middle_value = -heapq.heappop(left_queue)
        heapq.heappush(right_queue, middle_value)
    # 반대의 경우도 마찬가지 -> 이런 과정을 통해서 중간값으로 유지 가능
    elif len(right_queue) > len(left_queue):
        middle_value = heapq.heappop(right_queue)
        heapq.heappush(left_queue, -middle_value)
    
    # 최대 힙의 루트 노드가 중간값이다!
    print(-left_queue[0])