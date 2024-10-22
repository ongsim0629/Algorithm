var fizzBuzz = function(n) {
    let result_arr = [];
    for (let i=1; i<=n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            result_arr.push("FizzBuzz");
        }
        else if (i % 3 == 0){
            result_arr.push("Fizz");
        }
        else if (i % 5 == 0){
            result_arr.push("Buzz");
        }
        else{
            result_arr.push(i.toString());
        }
    }
    return result_arr;
};
