K = int(input())

num_list = []

for i in range(K):
    value = int(input())
    
    if value == 0:
        num_list.pop()
    else:
        num_list.append(value)
    
print(sum(num_list))