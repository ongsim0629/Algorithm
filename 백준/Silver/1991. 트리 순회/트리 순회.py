import sys
input = sys.stdin.readline

N = int(input())
# 간단한 트리의 경우는 딕셔너리 방식으로 구현이 가능하다.
# 'A' : ('B', 'C') 이런식으로 이 외에도 리스트, 인접 리스트 등으로 가능
tree = {}

for i in range(N):
    node, left, right = input().split()
    tree[node] = (left, right)

# 전위 순회
def preorder(node):
    if node == '.':
        return
    # 루트 노드 가장 먼저 출력
    print(node, end="")
    preorder(tree[node][0])
    preorder(tree[node][1])

# 중위 순회    
def inorder(node):
    if node == '.':
        return
    inorder(tree[node][0])
    # 왼쪽 자식 먼저 순회하고 루트 노드 출력
    print(node, end="")
    inorder(tree[node][1])

# 후위 순회    
def postorder(node):
    if node == '.':
        return
    postorder(tree[node][0])
    postorder(tree[node][1])
    # 자식들 모두 순회한 다음에 루트 노드 출력
    print(node, end="")
    
preorder('A')
print()
inorder('A')
print()
postorder('A')