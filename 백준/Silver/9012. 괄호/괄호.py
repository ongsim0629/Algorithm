T = int(input())

for i in range(T):
    # 계산을 위한 스택
    calc_stack = []
    target_str = input()
    # 괄호 문자열의 유효성을 확인하기 위한 변수
    is_valid = True
    
    for char in target_str:
        # 닫는 괄호인 경우
        if char == ')':
            # 스택에서 괄호 꺼내야 되는데 꺼낼 여는 괄호가 없으면 -> 잘못된 문자열
            if len(calc_stack) == 0:
                print('NO')
                is_valid = False  # 유효하지 않음을 표시
                break
            else:
                calc_stack.pop()
        # 여는 괄호인 경우 -> 스택에 푸시
        else:
            calc_stack.append(char)
    
    # 반복문이 정상적으로 끝나고 유효한 경우만 검사
    if is_valid:
        if len(calc_stack) == 0:
            print('YES')
        else:
            print('NO')