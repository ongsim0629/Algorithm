import sys
input = sys.stdin.readline

N = int(input())

paper = []
for i in range(N):
	paper.append(list(map(int, input().split())))

white_answer = 0
blue_answer = 0

def cut_papaer(arr, x, y, n):
    global white_answer
    global blue_answer
    
    initial_color = arr[x][y]
    all_same = True
    
    for i in range(x,x+n):
        for j in range(y,y+n):
            if arr[i][j] != initial_color:
                all_same = False
                break
            if not all_same:
                break
    
    if all_same:
        if initial_color == 1:
            blue_answer += 1
        else:
            white_answer += 1
    
    else:
        cut_papaer(paper, x, y, n//2)
        cut_papaer(paper, x+n//2, y, n//2)
        cut_papaer(paper, x, y+n//2, n//2)
        cut_papaer(paper, x+n//2, y+n//2, n//2)       

cut_papaer(paper, 0, 0, N)
print(white_answer)
print(blue_answer)