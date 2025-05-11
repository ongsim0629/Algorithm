function solution(phone_number) {
  const len = phone_number.length;
  const last4 = phone_number.slice(-4);        
  const stars = '*'.repeat(len - 4);             
  return stars + last4;
}