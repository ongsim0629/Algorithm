target = input()

# - 전 수식
before_minus = ''
# - 이후 수식
after_minus = ''

for idx, char in enumerate(target):
    if char == '-':
        before_minus = target[:idx]  #
        after_minus = target[idx+1:] 
        break

# - 없는 경우 그냥 전체 덧셈
if not after_minus:
    print(sum(map(int, target.split('+'))))
else:
    result = sum(map(int, before_minus.split('+')))
    result -= sum(map(int, after_minus.replace('-', '+').split('+')))
    
    print(result)
