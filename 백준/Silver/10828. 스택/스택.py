stack_list = []

def push(stack, number) :
    stack.append(number)

def pop(stack):
    if len(stack) == 0 :
        print(-1)
    else:
        print(stack.pop())

def top(stack):
    if len(stack) == 0:
        print(-1)
    else:
        value = stack[-1]
        print(value)

def size(stack):
    print(len(stack))

def empty(stack):
    if len(stack) == 0 :
        print(1)
    else:
        print(0)
    
N = int(input())

for i in range(N):
    command = input().split(" ")
    
    if len(command) == 2:
        push(stack_list, command[1])
    else:
        if command[0] == 'pop':
            pop(stack_list)
        elif command[0] == 'top':
            top(stack_list)
        elif command[0] == 'size':
            size(stack_list)
        elif command[0] == 'empty':
            empty(stack_list)           