N, M = map(int, input().split(" "))

card_list = list(map(int, input().split(" ")))
max_sum = float('-inf')

def black_jack(list):
    global max_sum
    
    for i in range(len(list)-2):
        for j in range(i+1,len(list)-1):
            for k in range(j+1, len(list)):
                if M >= list[i] + list[j] + list[k] > max_sum:
                    max_sum = list[i] + list[j] + list[k]
    

black_jack(card_list)
print(max_sum)