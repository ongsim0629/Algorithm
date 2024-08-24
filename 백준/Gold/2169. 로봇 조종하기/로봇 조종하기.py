import sys
input = sys.stdin.readline

N,M = map(int, input().split())

# 지역의 가치를 담은 지도
grid = []
for _ in range(N):
    grid.append(list(map(int, input().split())))

# dp 테이블 초기화 : dp[i][j] -> grid[i][j] 도착할 때 까지의 최고 가치 합
dp = [[0] * M for _ in range(N)]

# 첫 번째 행의 경우는 오른쪽으로만 움직일 수 있기 때문에 그냥 더해주면된다.
dp[0][0] = grid[0][0]
for i in range(1,M):
    dp[0][i] += dp[0][i-1] + grid[0][i]

# 두 번째 행부터는 왼쪽에서 오는 경우, 오른쪽에서 오는 경우, 위에서 오는 경우를 고려해야한다.
for i in range(1, N):
    # 왼쪽에서 오는 경우
    left = [0] * M
    # 제일 왼쪽 값은 위에서 오는 경우밖에 없다
    left[0] = dp[i-1][0] + grid[i][0]
    for j in range(1, M):
        # 위에서 오는 경우랑 왼쪽에서 오는 경우랑 고려해서 더 큰 값을 left 값으로 설정
        left[j] = max(left[j-1], dp[i-1][j]) + grid[i][j]
    # 오른쪽에서 오는 경우
    right = [0] * M
    # 제일 오른쪽 값은 위에서 오는 경우밖에 없다
    right[M-1] = dp[i-1][M-1] + grid[i][M-1]
    for j in range(M-2, -1, -1):
        right[j] = max(right[j+1], dp[i-1][j]) + grid[i][j]
    
    # left, right 중에 더 큰걸 찐 최종 최대값으로 저장한다.
    for j in range(M):
        dp[i][j] = max(left[j], right[j]) 

print(dp[N-1][M-1])