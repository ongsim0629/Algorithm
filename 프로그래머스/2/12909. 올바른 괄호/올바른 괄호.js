function solution(s){
    let answer = true;
    let stack = [];
    for (let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push("(");
        }
        else{
            if(stack[stack.length-1] == '('){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }

    if (stack.length !== 0){
        return false;
    }
    return answer;
}