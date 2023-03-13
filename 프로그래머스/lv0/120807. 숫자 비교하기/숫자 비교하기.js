function solution(num1, num2) {
    if ((-1 < num1 && num1 < 10001) && (-1 < num2 && num2 < 10001)){
        if(num1 == num2){
            return (1);
        }
        else{
            return(-1);
        }
    }
    else{
        console.log("wrong input!");
    }
}

/*
신기했던 코드 -> 삼항 연산자 쓰니까 이게 이렇게 쉽네;;;

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}
*/
