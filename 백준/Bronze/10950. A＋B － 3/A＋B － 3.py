T = int(input())
list = []

for i in range(T):
    A,B = [int(x) for x in input().split()]
    list.append(A+B)

for item in list:
    print(item)