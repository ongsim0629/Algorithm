N = int(input())

line = 1
while N > line:
    N -= line
    line += 1

if line % 2 == 0:
    answer = str(N) + "/" + str(line+1-N)
    print(answer)
else:
    answer = str(line+1-N) + "/" + str(N)
    print(answer)