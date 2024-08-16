N = int(input())

top_list = list(map(int, input().split()))
answer_list = [0]*N
stack = []

# 최대 N = 50만, 이중 for문 사용하면 시간 복잡도 O(N^2)이므로 1.5초내 연산 불가
# 브루트포스말고 다른 방법으로 풀어야함
for i in range(N):
    while stack:
        if stack[-1][1] > top_list[i]:
            answer_list[i] = stack[-1][0] + 1
            break
        else:
            stack.pop()
    stack.append((i, top_list[i]))
    
print(" ".join(map(str,answer_list)))