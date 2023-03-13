function solution(num1, num2) {
    // 제안사항
    if ((-1 < num1 && num1 < 101) && (-1 < num2 && num2 < 101)){
        // parseInt() 검색 안 하고 씀 장족의 발전 ㄷㄷ
        var answer = parseInt(num1 / num2 * 1000);
        return answer;
    }
    else{
        console.log("wrong input!");
    }
}

/*
다른 사람의 코드
별의 별 함수가 다 있다 ㄷㄷ...
물결은 진심 뭐임??..

const solution = (num1, num2) => Math.floor(num1 / num2 * 1000)

function solution(num1, num2) {
    return Math.trunc(num1 / num2 * 1000);
}

function solution(num1, num2) {
    return ~~(num1/num2*1000);
}

*/
