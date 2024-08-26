N, M = map(int, input().split())

def GCD(x,y):
    # 유클리드 호제법
    # 두 자연수 a,b (a>b)에 대해서 a를 b로 나눈 나머지를 r이라고 할 때, a와 b의 최대공약수는 b와 r의 최대공약수와 동일하다.
    while y:
        x, y = y, x % y
    return x

def LCM(x,y):
    return (x * y) // GCD(x, y)

print(GCD(N,M))
print(LCM(N,M))