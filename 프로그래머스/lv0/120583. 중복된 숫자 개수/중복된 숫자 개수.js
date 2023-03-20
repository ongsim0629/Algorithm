function solution(array, n) {
    // array 길이 관련 제한사항을 만족하는 경우
    if (0 < array.length && array.length < 101){
        // n 관련 제한사항을 만족하는 경우
        if (-1 < n && n < 1001){
            var answer = 0;
            for( var value of array){
                // array의 원소 관련 제한 사항을 만족하는 경우
                if (-1 < value && value < 1001 ){
                    // array의 원소가 n과 같으면 변수 answer에 1 덧셈
                    if(value == n){
                        answer += 1;
                    }
                }
            }
            return answer;
        }
    }
}