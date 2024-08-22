import sys
input = sys.stdin.readline

first_str = input().strip()
second_str = input().strip()

def find_lcs(first_str, second_str):
    len_first = len(first_str)
    len_second = len(second_str)
    
    # DP 테이블 선언 -> LCS의 길이 담길 예정임
    # 미리 모든 부분 0으로 선언해서 인덱스 0인 부분에 대한 처리는 필요 없따
    dp = [[0] * (len_second + 1) for _ in range(len_first + 1)]
    
    # 대신 계산할 때 1부터 시작
    for i in range(1, len_first + 1):
        for j in range(1, len_second + 1):
            if first_str[i-1] == second_str[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
                
    # 길이 구하고 나서 역추적하면 -> LCS도 구할 수 있다.
    lcs = []
    i, j = len_first, len_second
    
    while i > 0 and j > 0:
        if first_str[i-1] == second_str[j-1]:
            lcs.append(first_str[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
    
    answer = ''
    length = len(lcs)
    
    for i in range(length):
        answer += lcs[length-i-1]
        
    return answer

lcs_result = find_lcs(first_str, second_str)
print(len(lcs_result))
print(lcs_result)