function solution(numbers) {
    // numbers의 길이 제한사항
    if (0 < numbers.length && numbers.length < 101){
        var sum = 0;
        for( var value of numbers){
            if (-1 < value && value < 1001 ){
                sum += value;
            }
        }
        var answer = sum / numbers.length;
        return answer;
    }
}