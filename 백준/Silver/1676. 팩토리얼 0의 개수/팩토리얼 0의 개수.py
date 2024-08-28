N = int(input())

def factorial(num):
    if num <= 1:
        return 1
    else:
        return num * factorial(num-1)

def find_zero(string):
    count = 0
    for char in string[::-1]:
        if char != '0':
            break
        if char == '0':
            count += 1
    return count    

target = str(factorial(N))
answer =find_zero(target)
print(answer)