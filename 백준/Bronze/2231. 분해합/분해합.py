N = input()
found = False

for i in range(1, int(N)):
    string = str(i)
    hap = i
    
    for char in string:
        hap += int(char)
    
    if hap == int(N):
        print(i)
        found = True
        break

if not found:
    print(0)