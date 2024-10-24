var numberOfChild = function(n, k) {
    let is_left = false;
    let is_right = true;
    let owner = 0;
    
    for(let i = 1; i < k+1; i++){
        if (is_left === true && is_right === false){
            owner--;
            if(owner === 0){
                is_left = false;
                is_right = true;
            }
        }
        else if (is_right === true && is_left === false){
            owner++;
            if(owner === n-1){
                is_right = false;
                is_left = true;
            }
        }
    }
    return owner;
};
