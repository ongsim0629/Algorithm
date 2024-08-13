import sys
input = sys.stdin.readline

A, B, C = map(int, input().split(" "))

def multi(x, n):
    if n == 1:
        return x % C
    half = multi(x, n // 2)
    if n % 2 == 0:
        return half * half % C
    else:
        return half * half * x % C
    
print(multi(A,B))