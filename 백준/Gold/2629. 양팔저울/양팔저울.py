import sys
input = sys.stdin.readline

num_of_weight = int(input())
weights = list(map(int, input().split()))
num_of_bead = int(input())
beads = list(map(int, input().split()))

# 가능한 무게는 양수와 음수를 포함하므로, 최대치를 고려해서 넓게 dp 테이블을 잡음
max_weight = sum(weights)
dp = [False] * (max_weight * 2 + 1)  # 음수를 처리하기 위해 두 배 크기의 dp 테이블

# dp 테이블에서 중앙을 기준으로 0g을 표현할 수 있게끔 오프셋을 설정
offset = max_weight

dp[offset] = True  # 0그램은 항상 만들 수 있음

# DP 테이블 갱신
for weight in weights:
    temp_dp = dp[:]  # 기존 dp를 복사해 중복 갱신을 막기 위한 임시 배열 사용
    for i in range(len(dp)):
        if dp[i]:  # 현재 무게 i를 만들 수 있다면
            temp_dp[i + weight] = True  # 현재 무게에 추가하여 만들 수 있는 경우
            temp_dp[i - weight] = True  # 현재 무게에서 빼서 만들 수 있는 경우
    dp = temp_dp  # dp 배열 업데이트

# 구슬 무게 판별
for bead in beads:
    if bead + offset < len(dp) and dp[bead + offset]:
        print("Y", end=" ")
    else:
        print("N", end=" ")

