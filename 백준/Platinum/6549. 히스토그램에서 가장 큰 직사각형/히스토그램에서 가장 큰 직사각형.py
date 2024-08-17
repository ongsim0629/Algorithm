import sys
input = sys.stdin.readline

while True:
    input_data = list(map(int, input().split()))
    
    # 히스토그램의 수
    n = input_data[0]
    
    # 0이 입력되면, 더 이상 계산하지 않고 그냥 작업 끝내면 된다.
    if n == 0:
        break
    
    histograms = input_data[1:]
    
    # [인덱스, 히스토그램의 높이] -> 쌍으로 넣어준다!
    calc_stack = []
    answer_temp = 0
    
    # enumerate를 이용해서 자동으로 인덱스 같이 저장
    for idx, height in enumerate(histograms):
        last_idx = idx
        
        # 스택이 차 있고, 현재 히스토그램의 높이가 스택의 가장 위에 저장된 높이보다 낮다면
        # 즉, 나보다 높은 기둥이 스택에 있으면 계속해서 pop하여 처리
        while calc_stack and height < calc_stack[-1][1]:
            prev_histogram = calc_stack.pop()
            last_idx = prev_histogram[0]
            # 현재까지의 최대 넓이 계산
            answer_temp = max(answer_temp, prev_histogram[1] * (idx - prev_histogram[0]))            
        
        # 마지막으로 pop한 기둥이 시작한 위치를 유지하며, 현재 기둥을 스택에 추가
        calc_stack.append([last_idx, height])
    
    # 남아 있는 기둥에 대해서도 넓이 계산
    # 스택에 남은 기둥들을 끝까지 확장하여 최대 넓이를 계산
    for histogram in calc_stack:
        answer_temp = max(answer_temp, histogram[1] * (n - histogram[0]))
    
    # 최종 최대 넓이 출력
    print(answer_temp)