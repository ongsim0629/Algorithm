function solution(num1, num2) {
    if ((-1 < num1 && num1 < 101) && (-1 < num2 && num2 < 101)){
        var answer = num1 * num2;
        return answer;
    }
    else{
        console.log("wrong input!");
    }
}