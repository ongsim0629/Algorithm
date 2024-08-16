import heapq
import sys
input = sys.stdin.readline

N = int(input())
maximum_queue = []

for i in range(N):
    value = int(input())
    # 입력값이 0이 아니면 배열에 자연수 x를 넣는다
    if value != 0:
        # 모듈에 의해서 숫자가 작은 애들이 배열의 앞 쪽에 위치하게 된다.
        # -를 붙여줘서 숫자 큰 애들이 지금은 배열의 앞 쪽에 위치
        heapq.heappush(maximum_queue, -value)
    else:
        if len(maximum_queue) == 0:
            print(0)
        # 입력값 0이고 배열의 길이가 0이 아니면 배열에서 가장 큰 값 출력 및 제거
        else:
            print(-heapq.heappop(maximum_queue))   
