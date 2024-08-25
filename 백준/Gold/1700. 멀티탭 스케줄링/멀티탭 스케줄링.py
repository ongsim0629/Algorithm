import sys
input = sys.stdin.readline

N, K = map(int, input().split())
electronics = list(map(int, input().split()))
in_use = []

# 일단 N개 콘센트에 꽂기
for device in electronics:
    if device not in in_use:
        in_use.append(device)
    if len(in_use) == N:
        break

count = 0
for idx, device in enumerate(electronics):
    # 사용해야하는 전자기계 이미 콘센트에 꽂혀있으면 그냥 땡큐하고 쓰기
    if device in in_use:
        continue
    # 콘센트에 빈 자리가 없을 경우, 쓰고 있는 애중에 누구 뽑아야함
    if len(in_use) == N:
        # 앞으로 사용할 예정인 전자기기들에서 가장 늦게 쓸 애 찾아서 -> 걔 뽑기
        farthest_device = -1
        farthest_index = -1

        for in_device in in_use:
            # 앞으로 쓸 애들 선택
            if in_device in electronics[idx:]:
                next_use_index = electronics[idx:].index(in_device)
                if next_use_index > farthest_index:
                    farthest_index = next_use_index
                    farthest_device = in_device
            else:
                # 앞으로는 안 쓰는데 콘센트 꽂혀있는애 => 바로 뽑기
                farthest_device = in_device
                break
        
        # 바꾸기
        in_use.remove(farthest_device)
        in_use.append(device)
        count += 1

print(count)
    