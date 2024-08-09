paper_width, paper_height = [int(x) for x in input().split(" ")]
line_num = int(input())
x_list = []
y_list = []

# 점선 리스트 생성
for i in range(line_num):
    x, num = [int(x) for x in input().split(" ")]
    if(x == 0):
        x_list.append(num)
    elif(x==1):
        y_list.append(num)

# 리스트 정렬
x_list.sort()
y_list.sort()

possible_x = []
possible_y = []

#가능한 가로, 세로 길이 모두 뽑아내기

# 세로 점선이 있다면
if x_list:
    possible_x.append(x_list[0])
    possible_x.append(paper_height-x_list[-1])
    
    if len(x_list) > 1 :
        for j in range(len(x_list)-1):
            possible_x.append(x_list[j+1]-x_list[j])
# 세로 점선 없다면
else: 
    possible_x.append(paper_height)

# 가로 점선도 처리
if y_list:
    possible_y.append(y_list[0])
    possible_y.append(paper_width-y_list[-1])
    
    if len(y_list) > 1 :
        for j in range(len(y_list)-1):
            possible_y.append(y_list[j+1]-y_list[j])
else:
    possible_y.append(paper_width)

possible_x.sort()
possible_y.sort()

print(possible_x[-1]*possible_y[-1])
