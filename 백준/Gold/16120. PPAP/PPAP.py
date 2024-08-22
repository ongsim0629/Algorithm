target = input()

stack = []
flag = True
for char in target:
    ppap = 'AP'
    # 만약에 문자가 P이면
    if char == 'P':
        # 스택에 무언가 차있으면
        if stack:
            # 이전 꺼 확인
            prev = stack.pop()
            # 이전 꺼가 A였다면
            if prev == 'A':
                while stack:
                    chr = stack.pop()
                    ppap = chr + ppap
                    if ppap == 'PPAP':
                        stack.append('P')
                        break
                else:
                    flag = False
                    break
            # 이전꺼가 P였다면
            else:
                stack.append(prev)
                stack.append(char)
        # 스택에 아무것도 없으면 P집어넣음
        else:
            stack.append(char)
    # 문자가 A이면 일단 집어넣음
    else:
        stack.append(char)


if 'A' in stack or len(stack) != 1 or flag == False:
    print('NP')
else:
    print('PPAP')