function solution(n) {
    // 제한사항
    if ( 0 < n && n <101){
        // 소수점 이하 올림!
        var answer = Math.ceil(n/7);
        return answer;
    }
    // 제한사항 만족하지 못 할 때
    else{
        console.log("wrong input!");
    }
}