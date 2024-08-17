import sys
import heapq
input = sys.stdin.readline

N = int(input())
minimum_queue = []

count = 0

# 무조건 작은 수끼리 묶어서 비교해야지 최소 비교 횟수를 보장한다.
for i in range(N):
    value = int(input())
    heapq.heappush(minimum_queue, value)

# 힙에 카드 뭉치 1개 남을 때 까지 반복
while len(minimum_queue) >= 2:
    # 작은 값 2개 꺼내서 계산 실행하고,
    minimum = heapq.heappop(minimum_queue)
    second = heapq.heappop(minimum_queue)
    total_sum = minimum + second
    # 작은 거 고른 거 2개로 카드 뭉치 큰 거 1개 만들어서 누적한다고 생각
    count += total_sum
    heapq.heappush(minimum_queue, total_sum)

print(count)