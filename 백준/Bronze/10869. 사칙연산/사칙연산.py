import sys
input = sys.stdin.readline

A, B = map(int, input().split(" "))

def plus(x,y):
    return x + y

def minus(x,y):
    return x - y

def multi(x,y):
    return x * y

def share(x,y):
    return x // y

def mod(x,y):
    return x % y

print(plus(A,B))
print(minus(A,B))
print(multi(A,B))
print(share(A,B))
print(mod(A,B))