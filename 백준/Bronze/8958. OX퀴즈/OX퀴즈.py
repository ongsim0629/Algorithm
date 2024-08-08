N = int(input())

for x in range(N):
    ox = input()
    count = 0
    answer = 0
    for i in ox:
        if i == 'O':
            count += 1
            answer += count
        if i == 'X': 
            count = 0
        
    print(answer)
    