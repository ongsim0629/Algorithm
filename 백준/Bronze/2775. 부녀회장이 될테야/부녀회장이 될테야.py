import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    k = int(input())
    n = int(input())
    dp = [[0] * (n + 1) for _ in range(k+1)]
    
    # 0층 주민 배치
    for i in range(n + 1):
        dp[0][i] = i
    
    for floor in range(1, k+1):
        for ho in range(n+1):
            hap = 0
            for count in range(ho+1):
                hap += dp[floor-1][count]
            dp[floor][ho] = hap
            
    print(dp[k][n])