import sys
input = sys.stdin.readline

# 문자열 입력
target_str = input().strip()  # 개행 문자 제거
N = len(target_str)

# i에서 j까지의 숫자가 팰린드롬인지 아닌지 저장하는 배열
is_palindrome = [[False] * N for _ in range(N)]
# 최소 분할 수를 저장하는 DP 테이블
dp = [float('inf')] * N

# 팰린드롬 여부 테이블 초기화
for i in range(N):
    is_palindrome[i][i] = True  # 한 글자는 항상 팰린드롬
    # 두 글자인 경우에 두 글자가 같으면 팰린드롬
    if i < N-1 and target_str[i] == target_str[i+1]:
        is_palindrome[i][i+1] = True

# 점화식을 사용하여 팰린드롬 여부 테이블 채우기 (3글자 이상)
# 양 끝 숫자가 같고, 내부의 부분 배열이 팰린드롬이면, 팰린드롬이다
for length in range(3, N+1):
    for start_index in range(N - length + 1):
        end_index = start_index + length - 1
        if target_str[start_index] == target_str[end_index] and is_palindrome[start_index+1][end_index-1]:
            is_palindrome[start_index][end_index] = True

# 최소 분할 수 DP 테이블 채우기
for i in range(N):
    if is_palindrome[0][i]:  # 0부터 i까지가 팰린드롬이면 분할이 필요 없음
        dp[i] = 1
    else:
        for j in range(i):
            if is_palindrome[j+1][i]:  # j+1부터 i까지가 팰린드롬이면
                # j까지의 최소 분할 수에 1을 더한 값과 비교 왜냐하면 j까지 + 팰린드롬 1개 이므로
                # 그거랑 여태까지 i의 최소 분할 수 비교해서 더 작은 것으로 갑니당
                dp[i] = min(dp[i], dp[j] + 1) 

# 결과 출력 (마지막 인덱스의 dp 값이 최소 분할 수)
print(dp[N-1])
