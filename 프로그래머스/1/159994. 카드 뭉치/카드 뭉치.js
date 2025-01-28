function solution(cards1, cards2, goal) {
   let i = 0, j = 0;
   
   for(let word of goal) {
       if(word === cards1[i]) {
           i++;
       } else if(word === cards2[j]) {
           j++;
       } else {
           return "No";
       }
   }
   
   return "Yes";
}
