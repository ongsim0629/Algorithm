import sys
input = sys.stdin.readline
n = int(input())

if n == 0:
    print(0)
else:
    score_list = []
    for _ in range(n):
        score_list.append(int(input()))
    
    score_list.sort()
    thirty = int(n * 0.15 + 0.5)  # 올림을 적용하여 15%를 계산
    
    if thirty * 2 >= n:  # 엣지 케이스 처리
        print(0)
    else:
        new_score = score_list[thirty:n-thirty]
        if len(new_score) > 0:
            answer = int(sum(new_score) / len(new_score) + 0.5)  # 반올림을 명시적으로 처리
            print(answer)
        else:
            print(0)