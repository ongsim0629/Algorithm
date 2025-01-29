function solution(X, Y) {
   // 0-9까지 각 숫자의 개수를 저장할 배열
   const countX = new Array(10).fill(0);
   const countY = new Array(10).fill(0);
   
   // X의 각 숫자 개수 세기
   for(let num of X) {
       countX[num]++;
   }
   
   // Y의 각 숫자 개수 세기
   for(let num of Y) {
       countY[num]++;
   }
   
   let result = '';
   // 9부터 0까지 내림차순으로 확인 (가장 큰 수를 만들기 위해)
   for(let i = 9; i >= 0; i--) {
       // X와 Y에서 공통으로 나타나는 숫자의 최소 개수만큼 결과에 추가
       result += String(i).repeat(Math.min(countX[i], countY[i]));
   }
   
   if(result === '') return '-1';
   if(result[0] === '0') return '0';
   
   return result;
}