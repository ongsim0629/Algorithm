C = int(input())

for i in range(C):
    data = [int(x) for x in input().split(" ")]
    N = data[0]
    data = data[1:N+1]
    avg = sum(data)//N
    
    cnt = 0
    for item in data:
        if item > avg:
            cnt += 1
            
    per = (cnt/N)*100
    print('%.3f' %per + '%')