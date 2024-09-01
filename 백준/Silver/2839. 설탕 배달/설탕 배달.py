N = int(input())

# dp 테이블 정의 -> dp[i] : ikg의 설탕 배달할 때 필요한 설탕 봉지 수
dp = [-1] * (N + 1)

# N의 값이 3 이상이므로 dp[3]은 일단 1로 설정
dp[3] = 1

# N의 값이 5 이상이라면 dp[5]를 1로 설정해준다.
if N >= 5:
    dp[5] = 1

for i in range(6, N + 1):
    if dp[i-3]!= -1 or dp[i-5]!=-1:
        # 그러면 5kg 봉지만 가능하다는 것이겠지요
        # 5kg 봉지 1개 더 추가
        if dp[i-3] == -1:
            dp[i] = dp[i-5] + 1
        # 그러면 3kg 봉지만 가능하다는 것이겠지요
        # 3kg 봉지 1개 더 추가
        elif dp[i-5] == -1:
            dp[i] = dp[i-3] + 1
        # 3kg 봉지 추가도 가능하고 5kg 봉지 추가도 가능함
        # 그러면 더 작은 봉지 개수에서 +1
        else:
            dp[i] = min(dp[i-3],dp[i-5])+1

print(dp[N])