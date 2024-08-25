import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    score_list = []
    N = int(input())
    for _ in range(N):
        score_list.append(list(map(int, input().split())))
        
    # 서류 성적 기준 오름차순 정렬
    score_list.sort()
    
    # 서류 기준 1등 -> 합격
    count = 1
    minimum = score_list[0][1]
    
    for i in range(1, N):
        # 서류 1등보다 면접 잘 본 경우 합격 처리 -> 최소 면접 점수 갱신
        if score_list[i][1] < minimum :
            count += 1
            minimum = score_list[i][1]
    
    print(count)