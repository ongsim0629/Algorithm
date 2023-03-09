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