N = int(input())

def hanoi(num, start, tmp , to):
    if num <= 1:
        print(start, to)
        return
    else: 
        hanoi(num-1, start, to, tmp)
        print(start, to)
        hanoi(num-1, tmp, start, to)
    
        
        

if N > 20 :
    print(2**N - 1)
else:
    print(2**N - 1)
    hanoi(N, 1, 2, 3)