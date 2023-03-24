function solution(array) {
    // 제한사항
    if (0 < array.length && array.length < 100){
        for (var value of array){
            if (-1000 < value && value < 1000){
                //배열의 정렬
                array.sort((a,b)=>a-b);
            }
        }
        // 중앙값 출력
        console.log(array);
        var answer = array[Math.floor(array.length/2)];
        return answer;
    }
}
