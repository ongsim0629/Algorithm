function solution(sequence, k) {
   let left = 0;
   let right = 0;
   let sum = sequence[0];
   let minLength = Infinity;
   let result = [];
   
   while(right < sequence.length) {
       if(sum === k) {
           let length = right - left + 1;
           if(length < minLength) {
               minLength = length;
               result = [left, right];
           }
           sum -= sequence[left++];
           right++;
           if(right < sequence.length) sum += sequence[right];
       }
       else if(sum < k) {
           right++;
           if(right < sequence.length) sum += sequence[right];
       }
       else {
           sum -= sequence[left++];
       }
   }
   
   return result;
}