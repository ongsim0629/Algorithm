import sys
input = sys.stdin.readline

N, M = map(int, input().split())

num_to_pocketmon = {}
pocketmon_to_num = {}

for i in range(1, N+1):
    name = input().strip()
    num_to_pocketmon[i] = name
    pocketmon_to_num[name] = i

for _ in range(M):
    query = input().strip()
    if query.isdigit():
        print(num_to_pocketmon[int(query)])  # 번호로 이름 찾기
    else:
        print(pocketmon_to_num[query])  # 이름으로 번호 찾기
