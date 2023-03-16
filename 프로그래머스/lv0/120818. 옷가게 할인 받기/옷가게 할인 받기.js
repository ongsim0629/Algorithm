function solution(price) {
    // 제한사항을 만족하는 경우
    if (9 < price && price <1000001){
        var answer = price;
        // 3항 연산자 함 써봄 데헷 ^__^ v
        price > 499999 ? answer = price * 0.8  : 
        // 50만원 미만일 때
        price > 299999 ? answer = price * 0.9 : 
        // 30만원 미만일 때
        price > 99999 ? answer = price * 0.95:
        // 10만원 미만일 때
        answer = answer;
        return parseInt(answer);
    }
    // 제한사항을 만족하지 못하는 경우
    else {
        console.log("wrong input!");
    }
}