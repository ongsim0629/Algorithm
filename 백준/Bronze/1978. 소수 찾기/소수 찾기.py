N = int(input())

num_list = list(map(int, input().split(" ")))

def is_prime(number):
    if number == 1:
        return False
    
    for i in range(2, number):
        if number % i == 0:
            return False
    return True

count = 0
for number in num_list:
    if is_prime(number):
        count += 1
print(count)