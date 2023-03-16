function solution(money) {
    // 제한사항을 만족할 때
    if (0 < money && money < 1000001){
        var iceAme = 5500;
        var answer = [Math.floor(money/iceAme), money%iceAme];
        return answer;
    }
    // 제한사항을 만족하지 않을 때
    else {
        console.log("wrong input!");
    }
}