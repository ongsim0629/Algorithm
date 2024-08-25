N, K = map(int, input().split())

# nCk = n-1Ck-1 + n-1Ck
def bino(n, k):
    if k == 0 or k == n:
        return 1
    return bino(n-1, k) + bino(n-1, k-1)

print(bino(N,K))