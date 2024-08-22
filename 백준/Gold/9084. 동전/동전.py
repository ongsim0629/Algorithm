import sys
input = sys.stdin.readline

T = int(input())

for i in range(T):
    N = int(input())
    value_list = list(map(int, input().split()))
    # 만들어야 하는 금액
    M = int(input())
    
    # dp 테이블 -> i원 만드는 방법 담을 예정
    # 0으로 해야지 못 만드는 동전 수에 대한 그게 없음 ㅡㅡ
    dp = [0] * (M + 1)
    
    # 0원을 만드는 방법은 1가지 (아무 동전도 사용하지 않는 경우)
    dp[0] = 1
    
    for value in value_list:
        for i in range(value, M + 1):
            dp[i] += dp[i-value]
            
    # 결과 출력
    print(dp[M])