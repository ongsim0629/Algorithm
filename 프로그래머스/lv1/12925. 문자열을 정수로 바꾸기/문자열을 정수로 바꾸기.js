function solution(str) {
    if (!isNaN(str) && (str.length > 0 && str.length <6) && (str.charAt(0) != 0))
        {
        var answer = Number(str);
        return answer;
        }
    else {
        console.log("wrong input!");
    }
}