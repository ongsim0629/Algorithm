var isValid = function(s) {
    let char_list = s.split('');
    let calc_stack = [];
    for (let i = 0; i < char_list.length; i++){
        if (char_list[i] == "(" || char_list[i] == "{" || char_list[i] == "[" ){
            calc_stack.push(char_list[i]);
        }
        else if (char_list[i] == ")"){
            if (calc_stack[calc_stack.length-1] == "("){
                calc_stack.pop();
            }
            else {
                return false;
            }
        }
        else if (char_list[i] == "}"){
            if (calc_stack[calc_stack.length-1] == "{"){
                calc_stack.pop();
            }
            else {
                return false;
            }
        }
        else if (char_list[i] == "]"){
            if (calc_stack[calc_stack.length-1] == "["){
                calc_stack.pop();
            }
            else {
                return false;
            }
        }
    }
    if (calc_stack.length == 0){
        return true;
    }
    return false;
};
