import sys
input = sys.stdin.readline

# 팰린드롬 -> 우영우

N = int(input())
num_list = list(map(int, input().split()))
M = int(input())
# dp 테이블 : dp[i][j] => i에서 j까지의 숫자가 팰린드롬인지 아닌지
dp = [[False] * N for _ in range(N)]

def start_dp(list):
    # dp 테이블 기본값 설정
    for i in range(N):
        #문자열 길이가 1이면 무조건 팰린드롬이다.
        dp[i][i] = True
    # 문자열 길이가 2인 경우에 두 숫자가 같으면 팰린드롬이다.
    for i in range(N-1):
        if list[i] == list[i+1]:
            dp[i][i+1] = True
        
    # 점화식을 이용한 dp테이블 채우기
    # 양 끝 숫자가 같고, 내부의 부분 배열이 팰린드롬이면, 팰린드롬이다
    for length in range(2,N):
        for i in range(N-length):
            j = i + length
            if list[i] == list[j] and dp[i+1][j-1]:
                dp[i][j] = True

start_dp(num_list)
for i in range(M):
    S, E = map(int, input().split())
    print(1 if dp[S-1][E-1] else 0)

