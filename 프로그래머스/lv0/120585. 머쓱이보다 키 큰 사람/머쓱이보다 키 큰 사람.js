function solution(array, height) {
    // array의 길이와 height 관련 제한사항 만족
    if ((0 < array.length && array.length) && (0 < height && height < 201)){
        var answer = 0;
        for (var value of array){
            // array의 원소 관련 제한사항 만족
            if (0 < value && value < 201){
                if (value > height){
                    answer += 1;
                }
            }
        }
        return answer;
    }
}