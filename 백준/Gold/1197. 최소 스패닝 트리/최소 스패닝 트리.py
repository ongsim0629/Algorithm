import sys
input = sys.stdin.readline

# 부모 노드를 찾아주는 함수
def find(parent_info_arr, x):
    # 초기에는 x가 부모이지만 -> union하면서 x가 부모가 아니게 된다.
    # 이때! 이미 x에 값이 저장되어있지만 굳이 재귀하는 이유
    # 경로 압축으로 시간 복잡도를 줄이기 위해서 (?)
    if parent_info_arr[x] != x:
        parent_info_arr[x] = find(parent_info_arr, parent_info_arr[x])
    return parent_info_arr[x]

# 두 노드를 합치는 함수 (Union 연산)
def union(parent_info_arr, a, b):
    node_a_parent = find(parent_info_arr, a)
    node_b_parent = find(parent_info_arr, b)
    
    # 두 노드의 부모가 달라야지 사이클을 형성하지 않는다
    # 이 경우에만 정답에 추가해준다
    if node_a_parent < node_b_parent:
        # 더 작은 값으로 부모 정보를 업데이트 해준다
        parent_info_arr[node_b_parent] = node_a_parent
    else:
        parent_info_arr[node_a_parent] = node_b_parent
        
V, E = map(int, input().split())

path_list = []
for i in range(E):
    path_list.append(list(map(int, input().split())))

# 가중치가 제일 작은 간선 위주로 선택해야 하므로, 가중치를 기준으로 오름차순 정렬한다.
path_list.sort(key=lambda x: x[2])

# 유니온 파인드 구조 초기화
parent = [i for i in range(V + 1)]  # 노드의 부모를 자기 자신으로 초기화

answer = 0
for node1, node2, weight in path_list:
    # node1과 node2가 이미 같은 집합(트리)에 속해있으면 사이클이 발생하므로 무시
    if find(parent, node1) != find(parent, node2):
        # 두 노드를 같은 집합으로 합친다
        union(parent, node1, node2)
        # 사이클이 발생하지 않으면 해당 간선을 추가
        answer += weight


# 결과 출력
print(answer)
