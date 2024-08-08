A = int(input().strip())  # 첫 번째 숫자 입력받기
B = input().strip()  # 두 번째 숫자 입력받기 (문자열 형태로 받음)

first_answer = A * int(B[2])
second_answer = A * int(B[1])
third_answer = A * int(B[0])

print(first_answer)
print(second_answer)
print(third_answer)
print(first_answer + second_answer * 10 + third_answer * 100)
