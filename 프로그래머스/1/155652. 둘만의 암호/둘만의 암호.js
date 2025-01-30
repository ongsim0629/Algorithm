function solution(s, skip, index) {
   let answer = '';
   const skipSet = new Set(skip);
   
   for(let char of s) {
       let count = 0;
       let current = char;
       
       while(count < index) {
           // 다음 알파벳으로 이동
           current = String.fromCharCode(((current.charCodeAt(0) - 97 + 1) % 26) + 97);
           
           // skip에 포함되지 않은 경우만 카운트
           if(!skipSet.has(current)) {
               count++;
           }
       }
       
       answer += current;
   }
   
   return answer;
}