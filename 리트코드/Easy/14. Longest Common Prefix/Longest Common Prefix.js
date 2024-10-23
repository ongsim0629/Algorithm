var longestCommonPrefix = function(strs) {
    let answer = strs[0];
    
    for(let i = 1; i < strs.length; i++){
        while((strs[i].indexOf(answer)) !== 0){
            answer = answer.slice(0,-1);
            if (answer === "") return "";
        }
    }
    return answer;
};
