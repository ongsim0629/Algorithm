import sys
import heapq

input = sys.stdin.readline

N = int(input())
homework_list = []

for _ in range(N):
    dead_line, cup_noodle = map(int, input().split())
    homework_list.append((dead_line, cup_noodle))

homework_list.sort()

# 최소힙 -> 제일 작은애가 제일 앞으로
heap = []

for dead_line, cup_noodle in homework_list:
    heapq.heappush(heap, cup_noodle)
    # 과제 개수가 마감 기한보다 많아지면, 
    # 가장 작은 컵라면 수를 가진 과제를 우선순위 큐에서 뽑아내기
    if len(heap) > dead_line:
        heapq.heappop(heap)

print(sum(heap))