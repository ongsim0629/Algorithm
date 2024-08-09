num_list = []
for i in range(9):
    num_list.append(int(input()))

found = False

for i in range(8):
    for j in range(i+1,9):
        if (sum(num_list) - num_list[i] - num_list[j]) == 100:
            first_value = num_list[i]
            second_value = num_list[j]
            
            num_list.remove(first_value)
            num_list.remove(second_value)
            
            found = True
            break
        else:
            continue    
    if found == True:
        break

num_list.sort()

for item in num_list:
    print(item)