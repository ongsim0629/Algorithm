# N의 크기에 의해서 시간 복잡도가 O(N)인 알고리즘을 사용해야함
N = input();

def alice_tokki(n):
    # 한 자리씩 잘라서 숫자로 형식 변환하여 배열에 저장
    arr = list(map(int, str(n)))
    length = len(arr)
    
    # 가장 뒷 자리에서 부터 그 자리 수 보다 그 앞의 자리수가 작을 때를 찾아야 한다.
    i = length - 1
    while i > 0 and arr[i] <= arr[i - 1]:
        i -= 1
        
    if i == 0:  # 주어진 숫자가 내림차순 정렬된 경우 (즉, 가장 큰 숫자인 경우) -> 더 큰 수가 없음
        print(-1)
        return

    # 그 앞의 자리 수를 기준으로 하여서
    pivot_idx = i - 1
    
    # 기준 뒤의 값 중에서 기준보다 크지만 가장 작은 수를 찾는다.
    for j in range(length - 1, pivot_idx, -1):
        if arr[j] > arr[pivot_idx]:
            # 그 크지만 가장 작은 수랑 기준의 자리를 변경한다.
            arr[pivot_idx], arr[j] = arr[j], arr[pivot_idx]
            break
    
    # 기준 뒤의 값을 오름차순으로 정렬하는 대신 뒤집기
    arr = arr[:pivot_idx + 1] + arr[pivot_idx + 1:][::-1]
    
    # 배열을 문자열로 변환한 후 숫자로 변환하여 출력
    answer = int(''.join(map(str, arr)))
    print(answer)

alice_tokki(N)
