import sys
input = sys.stdin.readline

S = input()
N = int(input())
dp = [False] * (len(S) + 1)

sub_word = []
for i in range(N):
    sub_word.append(input().strip())

lenght = len(S)

def word_cleave(num):
    # 빈 문자열은 항상 가능하다.
    dp[0] = True
    
    for i in range(lenght):
        for j in range(i):
            if dp[j] == True and S[j:i] in sub_word:
                dp[i] = True
    return dp[num-1]

answer = word_cleave(lenght)
if answer == True:
    print(1)
else:
    print(0)