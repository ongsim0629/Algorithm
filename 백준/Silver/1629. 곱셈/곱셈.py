import sys
input = sys.stdin.readline

A, B, C = map(int, input().split())

def recursion(x, n):
    if n == 0:
        return 1
    
    if n % 2 == 0:
        y = recursion(x, n // 2)
        return (y * y) % C
    else:
        return (x * recursion(x, n - 1)) % C

answer = recursion(A % C, B)
print(answer)
