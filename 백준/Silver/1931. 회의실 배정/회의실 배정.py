import sys
input = sys.stdin.readline

N = int(input())

meeting_list = []
for i in range(N):
    meeting_list.append(list(map(int, input().split())))

# 빨리 끝나는 애들 먼저 빨리 빨리 시켜줘야 많이 회의할 수 있다.
meeting_list.sort(key=lambda x: (x[1], x[0]))

count = 0
time = 0

for i in range(len(meeting_list)):
    if time <= meeting_list[i][0]:  
        count += 1
        time = meeting_list[i][1] 
        
print(count)