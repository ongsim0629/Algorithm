a = input().strip()
b = input().strip()
c = input().strip()

if a.isdigit():
    num = int(a) + 3
elif b.isdigit():
    num = int(b) + 2
else:
    num = int(c) + 1

if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")
elif num % 3 == 0:
    print("Fizz")
elif num % 5 == 0:
    print("Buzz")
else:
    print(num)