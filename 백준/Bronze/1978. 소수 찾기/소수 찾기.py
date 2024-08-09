def is_prime(x):
    if (x == 1):
        return False
    for i in range(2,x//2+1):
        if (x % i == 0):
            return False
    return True

N = int(input())
num_list = [int(x) for x in input().split(" ")]
count = 0

for num in num_list:
    answer = is_prime(num)
    if answer == True:
        count += 1
    
print(count)