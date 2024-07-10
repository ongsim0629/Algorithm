S = input();
calc_list = [];

def unzip_string(input):
    i = 0
    while i < len(input):
        value = input[i];
        # 닫는 괄호가 아닌 경우는 일단 계산 스택에 다 푸시
        if value != ')':
            calc_list.append(value)
        # 닫는 괄호가 오면 계산 시작해야함
        else:
            target = ''
            # 여는 괄호 만날 때까지 팝
            while calc_list[-1] != '(':
                target += calc_list.pop()
            # 여는 괄호 꺼내고
            calc_list.pop()
            # 문자열 반복해야하는 횟수 확인
            num = int(calc_list.pop())
            # 압축해제해서 push
            calc_list.append(target * num)
        i += 1
    
    answer = sum(len(item) for item in calc_list)
    print(answer)

# 예시 입력
unzip_string(S)
