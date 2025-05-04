function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const change = Math.floor(n / a);   
    const get    = change * b;         

    answer += get;                      
    n = get + (n % a);                  
  }

  return answer;
}