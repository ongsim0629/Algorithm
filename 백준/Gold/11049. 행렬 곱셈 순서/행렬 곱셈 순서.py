import sys
input = sys.stdin.readline

# 행렬의 개수 입력
N = int(input())
size_list = [tuple(map(int, input().split())) for _ in range(N)]

# dp 테이블 초기화 (최대 연산 횟수 초기화)
dp = [[0] * N for _ in range(N)]

# 비용 저장 테이블 초기화 (행렬 곱셈의 최소 연산 횟수 저장)
for length in range(1, N):  # 부분 행렬의 길이
    for i in range(N - length):
        j = i + length
        dp[i][j] = float('inf')
        for k in range(i, j):
            # dp[i][k] + dp[k+1][j] + 행렬 곱셈 비용
            cost = dp[i][k] + dp[k+1][j] + size_list[i][0] * size_list[k+1][0] * size_list[j][1]
            dp[i][j] = min(dp[i][j], cost)

# 결과 출력
print(dp[0][N-1])