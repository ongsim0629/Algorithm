N, K = map(int, input().split())
arr = list(map(int, input().split()))

results = []

for i in range(K):
    first_idx, last_idx, choice = map(int, input().split())
    sorted_arr = arr[first_idx-1:last_idx]
    sorted_arr.sort()
    results.append(sorted_arr[choice-1])

for result in results:
    print(result)
