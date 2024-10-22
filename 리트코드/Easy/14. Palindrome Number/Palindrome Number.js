var isPalindrome = function(x) {
    let origin = x.toString();
    let split_list = origin.split('').reverse();
    let reverse = '';
    
    for (let i = 0; i < split_list.length; i++){
        reverse += split_list[i];
    }
    
    if (reverse == origin){
        return true;
    }
    else{
        return false;
    }
};
