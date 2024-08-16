N, K = map(int, input().split())
number = input()

stack = []
count = 0

for i in range(N):
    # 스택에 들어있는 마지막 숫자가 현재 숫자보다 작고, 아직 K개의 숫자를 제거하지 않았을 때 제거
    while stack and count < K and stack[-1] < number[i]:
        stack.pop()
        count += 1
    stack.append(number[i])

# 만약 K개의 숫자를 제거하지 못한 경우, 뒤에서 K-count 만큼 자름
result = stack[:N-K]

print("".join(result))
