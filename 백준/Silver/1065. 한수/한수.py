X = int(input())
answer = 0

if X < 100 :
    answer = X
else :
    answer = 99
    for i in range(100,X+1):
        if int(str(i)[1]) - int(str(i)[0]) == int(str(i)[2]) - int(str(i)[1]):
            answer += 1
        

print(answer)