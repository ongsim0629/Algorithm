L = int(input())
string = input()

hap = 0
mod = 1234567891  # 문제에서 주어진 소수

power_of_31 = 1  # 31의 거듭제곱을 저장할 변수

for i in range(L):
    num = ord(string[i]) - 96  # 'a' -> 1, 'b' -> 2, ..., 'z' -> 26
    hap = (hap + num * power_of_31) % mod  # 모듈로 연산을 사용하여 큰 수를 방지
    power_of_31 = (power_of_31 * 31) % mod  # 다음 거듭제곱을 위해 31을 곱함

print(hap)