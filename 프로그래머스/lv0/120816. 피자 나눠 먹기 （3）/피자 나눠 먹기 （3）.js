function solution(slice, n) {
    // 제한사항을 만족할 때
    if ((1 < slice && slice < 11) && (0 < n && n < 101)){
        var answer = Math.ceil(n/slice);
        return answer;
    }
    // 제한사항을 만족하지 못 할 때
    else {
        console.log("wrong input!");
    }
}