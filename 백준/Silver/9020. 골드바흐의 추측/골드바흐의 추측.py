T = int(input())

def prime_numbers(n):
    arr = [i for i in range(n+1)] # 인덱싱을 수월하게 하기 위해 0부터 배열 선언
    end = int(n**(1/2))
    for i in range(2, end+1):
        if arr[i] == 0: # 이미 소수가 아님이 판별된 수는 건너뜀
            continue
        for j in range(i*i, n+1, i): # 자기 자신을 제외한 i의 배수는 모두 0으로 처리함.
            arr[j] = 0
            
    return [i for i in arr[2:] if arr[i]]

for i in range(T):
    N = int(input())
    
    #2부터 N까지의 수 나열
    prime_list = prime_numbers(N)
    prime_set = set(prime_list)
    
    answer1 = 0
    answer2 = 0
    diff = 10000
    
    for prime in prime_list:
        if N - prime in prime_set:  # N에서 현재 소수를 뺀 값이 소수 리스트에 있는지 확인
            another_prime = N - prime
            if diff > abs(prime - another_prime):
                answer1 = prime
                answer2 = another_prime
                diff = abs(prime - another_prime)
    
    print(min(answer1, answer2), max(answer1, answer2))