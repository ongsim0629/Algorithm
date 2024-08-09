N, M = input().split(" ")

new_N = int(N[-1] + N[1] + N[0])
new_M = int(M[-1] + M[1] + M[0])

print(max(new_M, new_N))