function solution(today, terms, privacies) {
   const answer = [];
   
   // 약관 종류별 유효기간을 객체로 변환
   const termMap = {};
   terms.forEach(term => {
       const [type, month] = term.split(' ');
       termMap[type] = Number(month);
   });
   
   // 날짜를 일 수로 변환하는 함수
   function dateToNumber(date) {
       const [year, month, day] = date.split('.').map(Number);
       return year * 12 * 28 + month * 28 + day;
   }
   
   // 오늘 날짜를 일 수로 변환
   const todayNum = dateToNumber(today);
   
   // 각 개인정보의 유효기간 체크
   privacies.forEach((privacy, index) => {
       const [date, type] = privacy.split(' ');
       const expireDate = dateToNumber(date) + termMap[type] * 28;
       
       if(todayNum >= expireDate) {
           answer.push(index + 1);
       }
   });
   
   return answer;
}