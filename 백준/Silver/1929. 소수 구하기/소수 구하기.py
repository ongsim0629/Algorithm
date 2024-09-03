M, N = map(int, input().split())

def prime_numbers(n):
    # 에라토스테네스의 체를 사용하여 소수 판별 배열 생성
    is_prime = [True] * (n+1)
    is_prime[0] = is_prime[1] = False  # 0과 1은 소수가 아님
    for start in range(2, int(n**0.5) + 1):
        if is_prime[start]:
            for i in range(start*start, n+1, start):
                is_prime[i] = False
    return is_prime

def find_primes_in_range(m, n):
    # n까지의 소수 여부를 저장
    is_prime = prime_numbers(n)
    # m부터 n까지의 소수 출력
    for num in range(max(m, 2), n + 1):  # 최소 시작 범위를 2로 설정
        if is_prime[num]:
            print(num)

find_primes_in_range(M, N)
