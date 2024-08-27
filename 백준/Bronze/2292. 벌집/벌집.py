N = int(input())

target = 1
i = 1

while N > target:
    target += 6 * i
    i += 1
    
print(i)