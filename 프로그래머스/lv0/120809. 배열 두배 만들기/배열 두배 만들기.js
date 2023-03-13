function solution(numbers) {
    var answer = [];
    // 제한사항을 위해서 Array.length 속성으로 배열의 길이를 확인한다.
    if (0 < numbers.length && numbers.length < 1001){
         for (var i in numbers){
             // 제한사항을 모두 만족하면 answer에 차례대로 값을 삽입한다.
             if ( -10001 < numbers[i] && numbers[i] < 10001 ){
                 // 자바스크립트에서 배열에 추가하고 싶을때는 Array.push 속성을 쓴다.
                 answer.push(2*numbers[i]);
             }
             // numbers의 원소가 제한사항을 만족하지 않을 때
             else {
                 console.log("numbers의 원소를 확인해주세요!");
             }
         }
        return answer;
    }
    // numbers의 길이가 제한 조건을 만족하지 않을 때
    else {
        console.log("numbser의 길이를 확인해주세요!");
    }
}