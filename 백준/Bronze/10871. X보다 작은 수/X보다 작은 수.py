N, X = [int(x) for x in input().split(" ")]

list = []
data = input().split(" ")

for item in data:
    list.append(int(item))    

answer = ''

for item in list:
    if item < X :
        answer += str(item) + " "

print(answer)