const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const K = input[0][1];
let count = 0;
let found = false;

let A = [...input[1]];

function merge_sort(A) {
    if (A.length <= 1) {
        return A;
    }
    let middle = parseInt((A.length+1) / 2);
    let left_A = A.slice(0, middle);
    let right_A = A.slice(middle);
    left_A = merge_sort(left_A);
    right_A = merge_sort(right_A);
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
