import sys
import sys
sys.setrecursionlimit(10**6)  # 재귀 제한을 증가

# 오른쪽 서브트리를 구분하는 함수 => 오른쪽 서브트리의 시작 인덱스를 리턴
def find_right_subtree_index(list, start, end, root_value):
    # 현재 노드의 값보다 커지는 값의 인덱스를 리턴한다.
    for i in range(start, end):
        if list[i] > root_value:
            return i
    # 오른쪽 서브트리가 없는 경우
    return end

# tree 리스트에서 start부터 end까지 노드의 자식 관계를 설정합니다.
def build_bst(tree, start, end):
    if start >= end:
        return None

    root_value = tree[start]
    right_subtree_index = find_right_subtree_index(tree, start + 1, end, root_value)
    
    left_child = None
    right_child = None
    
    if start + 1 < right_subtree_index:
        left_child = tree[start + 1]
    if right_subtree_index < end:
        right_child = tree[right_subtree_index]

    node_trees[root_value] = (left_child, right_child)
    
    # 왼쪽 서브트리 처리
    build_bst(tree, start + 1, right_subtree_index)
    # 오른쪽 서브트리 처리
    build_bst(tree, right_subtree_index, end)

def postorder(node):
    if node == None:
        return
    if node not in node_trees:
        return
    postorder(node_trees[node][0])
    postorder(node_trees[node][1])
    # 자식들 모두 순회한 다음에 루트 노드 출력
    print(node)

input_data = sys.stdin.read()
input_value = input_data.split()

tree = list(map(int, input_value))
node_trees = {}

build_bst(tree, 0, len(tree))

postorder(next(iter(node_trees)))
