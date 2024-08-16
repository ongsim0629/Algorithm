import sys
from collections import deque

input = sys.stdin.readline
# popleft()를 사용하기 위해서 그냥 리스트가 아닌 depue 형식으로 선언
queue_list = deque()

def push(queue, number):
    queue.append(number)

def pop(queue):
    if len(queue) == 0:
        print(-1)
    else:
        print(queue.popleft())

def size(queue):
    print(len(queue))

def empty(queue):
    if len(queue) == 0:
        print(1)
    else:
        print(0)

def front(queue):
    if len(queue) == 0:
        print(-1)
    else:
        print(queue[0])

def back(queue):
    if len(queue) == 0:
        print(-1)
    else:
        print(queue[-1])

N = int(input())

for i in range(N):
    command = input().split()
    
    if len(command) == 2:
        push(queue_list, command[1])
    else:
        if command[0] == 'pop':
            pop(queue_list)
        elif command[0] == 'size':
            size(queue_list)
        elif command[0] == 'empty':
            empty(queue_list)
        elif command[0] == 'front':
            front(queue_list)
        elif command[0] == 'back':
            back(queue_list)
