import math
A, B, V = [int(x) for x in input().split()]

print(math.ceil((V-A)/(A-B))+1)