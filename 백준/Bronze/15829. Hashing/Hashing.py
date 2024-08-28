L = int(input())
string = input()

hap = 0
for idx, char in enumerate(string):
    num = ord(char) - 96
    hap += num * 31**idx
print(hap)