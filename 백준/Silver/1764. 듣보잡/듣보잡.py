import sys
input = sys.stdin.readline

# 500000이하의 자연수 -> O(N)이하 ㄱㄱ 아니면 O(NlogN)
N, M = map(int, input().split())

listen_list = set()
watch_list = set()

for _ in range(N):
    listen_list.add(input().strip())

for _ in range(M):
    watch_list.add(input().strip())

answer_list = listen_list & watch_list

print(len(answer_list))
for item in sorted(answer_list):
    print(item)