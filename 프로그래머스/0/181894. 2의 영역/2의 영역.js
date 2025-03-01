function solution(arr) {
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    
    return first === -1 ? [-1] : arr.slice(first, last + 1);
}
