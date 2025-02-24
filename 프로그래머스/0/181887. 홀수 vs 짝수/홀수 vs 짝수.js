function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    let answer = 0;
    
    for (let i = 0; i < num_list.length; i++){
        if (i % 2 == 0){
            odd += num_list[i];
        }
        else {
            even += num_list[i];
        }
    }
    
    answer = odd > even ? odd : even;
    
    return answer;
}