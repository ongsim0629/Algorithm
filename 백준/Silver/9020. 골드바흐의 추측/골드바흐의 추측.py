T = int(input())

# 아리스토테네스의 체
def find_prime(number):
    prime_list = [i for i in range(number+1)]
    
    for i in range(2, int(number**(1/2))+1):
        if prime_list[i] == 0:
            continue
        for j in range(i*i, number+1, i):
            prime_list[j] = 0
    return set(prime_list)
    
for i in range(T):
    test_case = int(input())
    # 0이 포함된 셋 -> 0 제거하고 리스트로 변환
    prime_list = find_prime(test_case)
    prime_list.remove(0)
    prime_list.remove(1)
    
    diff = float('inf')
    ans1 = 0
    ans2 = 0
    
    for num in prime_list:
        num1 = num
        if (test_case - num1) in prime_list:
            num2 = test_case - num1
            if diff > abs(num2 - num1):
                diff = abs(num2 - num1)
                ans1 = num1
                ans2 = num2
    print(min(ans1, ans2), max(ans1, ans2))
        