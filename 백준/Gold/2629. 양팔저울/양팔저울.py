import sys
input = sys.stdin.readline

num_of_weight = int(input())
weights = list(map(int, input().split()))
num_of_bead = int(input())
beads = list(map(int, input().split()))

# 추의 최대 무게 합을 구해 DP 테이블 크기 설정
max_weight = sum(weights)
dp = [[False] * (max_weight + 1) for _ in range(num_of_weight + 1)]

# 0그램은 항상 만들 수 있음
dp[0][0] = True

# DP 테이블 갱신
for i in range(1, num_of_weight + 1):
    weight = weights[i - 1]
    for j in range(max_weight + 1):
        if dp[i - 1][j]:  # 이전 단계에서 무게 j를 만들 수 있었다면
            dp[i][j] = True  # 현재도 만들 수 있음
            if j + weight <= max_weight:
                dp[i][j + weight] = True  # 현재 추를 더해서 만들 수 있는 무게
            if abs(j - weight) <= max_weight:
                dp[i][abs(j - weight)] = True  # 현재 추를 빼서 만들 수 있는 무게

# 결과 확인
for bead in beads:
    if bead <= max_weight and dp[num_of_weight][bead]:
        print("Y", end=" ")
    else:
        print("N", end=" ")