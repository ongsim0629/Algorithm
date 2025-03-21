function solution(myString, pat) {
    let alter = '';
    for (let char of myString){
        if (char === 'A'){
            alter += 'B';
        }
        else {
            alter += 'A';
        }
    }
    
    if (alter.includes(pat) === true){
        return 1;
    }
    else {
        return 0;
    }
}