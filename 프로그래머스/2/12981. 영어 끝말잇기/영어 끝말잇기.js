function solution(n, words) {
    let num = 1;
    let turn = 1;
    let already = [];
    
    for (let i = 0; i < words.length; i++){
        const cur_word = words[i];
        const pre_word = words[i-1];
        
        if ( i > 0 && cur_word[0] !== pre_word[pre_word.length-1] || already.includes(cur_word)){
            return [num, turn];
        }
        
        already.push(cur_word);
        
        num++;
        if (num > n){
            num = 1;
            turn++;
        }
    }
    
    return [0,0];
}