import sys
input = sys.stdin.readline
n = int(input())

circles = []
# 괄호 사용 -> 원의 왼쪽 부분이 들어오면 스택에 쌓고, 원의 오른쪽 부분이 들어오면 계산을 시작한다.
for _ in range(n):
    x, r = map(int, input().split())
    # 왼쪽 점인지 오른쪽 점인지와 점의 x 좌표
    circles.append(("L", x - r)) # 왼쪽 점 = 중심 - 반지름
    circles.append(("R", x + r)) # 오른쪽 점 = 중심 + 반지름

# 사전순 -> reverse -> "R" 먼저 정렬된다
circles.sort(key=lambda x: (x[0]),  reverse=True)
# x 좌표 오름차 순으로 정렬
circles.sort(key=lambda x: x[1])
# 정렬 마치면 -> 좌표순으로 정렬되며, 같은 좌표일 때는 오른쪽 점이 왼쪽 점보다 앞에 온다.

stack = []
# 영역 수
count = 1

for circle in circles:
    # 원의 왼쪽 좌표일 경우 -> 스택에 저장해둠
    if circle[0] == "L":
        stack.append(circle)
        # 스택에 저장만 하고, 아래의 코드들은 수행하지 않도록 continue 해서 다음 점의 좌표로 넘어가줌
        continue
    
    # 오른쪽 좌표가 들어왔을 때 수행될 부분들
    # total_width는 뽑은 게 원일 때 사용되는 변수임 -> 접해서 영역이 2개 더 추가될 때
    total_width = 0
    # 뽑은 게 왼쪽 좌표면 break 돼서 탈출 할 수 있고, 뽑은 게 원인 경우에는 계속 누적해가면서 count 2 증가해줄 지 판단하게 된다.
    while stack:
        # 스택의 가장 위 뽑아서 prev에 저장
        prev = stack.pop()
        # 뽑은게 왼쪽 좌표였다면
        if prev[0] == "L":
            # 현재의 좌표 (오른쪽 좌표)와 과거의 좌표(왼쪽 좌표) -> 지름 알 수 있음
            width = circle[1] - prev[1]
            # 현재 원의 지름이 현재 원을 채운 원들의 지름 총합과 같은 경우
            if total_width == width:
                # 상,하 영역이 추가 되므로 2개가 더 추가된다.
                count += 2
            # 다를 경우 -> 현재 원 안에 원이 없는 경우, 현재 원 안의 원이 작게 존재하는 경우
            # -> 단순히 영역이 1개 더 추가 되는 것이다.
            else:
                count += 1
            # 원이 만들어졌으므로 stack에 원을 의미하는 C와 너비 추가
            stack.append(("C", width))
            break
        # 뽑은게 원 이었을 경우 -> 현재 원 안에 원이 있던 경우
        # 현재 원 안에 원이 여러 개 있으면 while문에 의해서 계쏙 실행되면서 total_width가 갱신된다
        elif prev[0] == "C":
            # C에는 좌표가 아니라 지름이 담겨 있음
            total_width += prev[1]

print(count)