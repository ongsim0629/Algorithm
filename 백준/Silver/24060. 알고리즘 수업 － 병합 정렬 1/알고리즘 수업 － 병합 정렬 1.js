function merge_sort(A) {
    // 재귀가 계속되면서 배열이 쪼개지다가 길이가 1이 되는 순간 -> 길이가 1이면 이미 정렬된 상태라고 보고 그냥 원소를 리턴해준다.
    if (A.length <= 1) {
        return A;
    }
    let middle = parseInt((A.length+1) / 2);
    let left_A = A.slice(0, middle);
    let right_A = A.slice(middle);
    // 재귀에 의해서 계~속 쪼개지다가 원소 길이 1일 때의 값들이 각각 left와 right에 저장된다. (맨 앞의 두 값)
    left_A = merge_sort(left_A);
    right_A = merge_sort(right_A);
    // 그러면 맨 앞의 두 값이 정렬된 배열 (즉 아래의 tmp리스트)가 left_A로 저장된다. 계속 반복하면 이제 아예 정렬되게된다.
    return merge(left_A, right_A);
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let q = left.length - 1;
    let r = right.length - 1;
    let tmp = [];
    while (i <= q && j <= r) {
        if (left[i] <= right[j]) {
            tmp.push(left[i]);
            count++;
            if (count == K) {
                console.log(left[i]);
                found = true;
            }
            i += 1;
        } else {
            tmp.push(right[j]);
            count++;
            if (count == K) {
                console.log(right[j]);
                found = true;
            }
            j += 1;
        }
    }
    while (i <= q) {
        tmp.push(left[i]);
        count++;
        if (count == K) {
            console.log(left[i]);
            found = true;
        }
        i += 1;
    }
    while (j <= r) {
        tmp.push(right[j]);
        count++;
        if (count == K) {
            console.log(right[j]);
            found = true;
        }
        j += 1;
    }
    return tmp;
}

merge_sort(A);

// K번째에 저장되는 수를 찾지 못한 경우 -1 출력
if (!found) {
    console.log(-1);
}
