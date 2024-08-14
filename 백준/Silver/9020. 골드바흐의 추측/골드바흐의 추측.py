T = int(input())

# 아리스토테네스의 체
def find_prime(number):
    prime_list = [i for i in range(number+1)]
    
    for i in range(2, int(number**(1/2))+1):
        if prime_list[i] == 0:
            continue
        for j in range(i*i, number+1, i):
            prime_list[j] = 0
    return [i for i in prime_list[2:] if prime_list[i]]
    
for i in range(T):
    test_case = int(input())
    # 0이 포함된 셋 -> 0 제거하고 리스트로 변환
    prime_list = find_prime(test_case)
    prime_set = set(prime_list)
    
    diff = float('inf')
    ans1 = 0
    ans2 = 0
    
    for num in prime_set:
        if (test_case - num) in prime_set:
            num2 = test_case - num
            if diff > abs(num2 - num):
                diff = abs(num2 - num)
                ans1 = num
                ans2 = num2
    print(min(ans1, ans2), max(ans1, ans2))
        