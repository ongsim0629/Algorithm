target = input()

stack = []
flag = True

for char in target:
    # 문자가 닫는 괄호였던 경우
    if char == ')' or char == ']':
        # 계산할 리스트가 비어있으면 -> 잘못된 문자열
        if len(stack) == 0:
            flag = False
            break
        # 계산할 리스트 비어 있지 않으면 -> 계산
        else:
            temp = 0
            while stack:
                top = stack.pop()
                # 올바른 여는 괄호를 만난 경우
                if (char == ')' and top == '(') or (char == ']' and top == '['):
                    if temp == 0:
                        stack.append(2 if char == ')' else 3)
                    else:
                        stack.append(temp * (2 if char == ')' else 3))
                    break
                # 숫자인 경우 더해줌
                elif isinstance(top, int):
                    temp += top
                # 다른 종류의 여는 괄호인 경우 (char = ')' top = '[')
                else:
                    flag = False
                    break
            # 연산하려고 pop한 이후에 스택에 아무것도 남아있지 않게되는 상황 ()]()
            else: 
                flag = False
                break
    # 여는 괄호는 일단 스택에 푸시
    else:
        stack.append(char)

# (() 같은 반례 확인하기 위해서
if flag == True and all(isinstance(i, int) for i in stack):
    print(sum(stack))
else:
    print(0)