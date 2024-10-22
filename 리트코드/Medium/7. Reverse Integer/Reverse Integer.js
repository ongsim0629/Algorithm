var reverse = function(x) {
    let origin = x.toString();
    let calc_list = origin.split('').reverse();
    let reverse = '';
    
    for(let i = 0; i < calc_list.length; i++){
        reverse += calc_list[i];
    }
    
    if (reverse[reverse.length-1] == '-'){
        reverse = '-' + reverse.slice(0,-1);
    }
    
    let result = parseInt(reverse);
    if(result < Math.pow(2, 31) - 1 && result > -Math.pow(2,31)){
        return result;
    }
    return 0;
    
};
