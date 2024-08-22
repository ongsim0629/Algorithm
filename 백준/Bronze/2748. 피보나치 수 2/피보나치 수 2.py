n = int(input())

# dp 캐싱 진행할 배열
num_list = [-1] * (n+1)

def fibonacci(number):
        num_list[0] = 0
        num_list[1] = 1
        
        # bottom_up 방식으로 계산해서 중복된 계산을 피한다.
        for i in range(2, number+1):
            num_list[i] = num_list[i-1] + num_list[i-2]
            
        return num_list[number]

answer = fibonacci(n)
print(answer)