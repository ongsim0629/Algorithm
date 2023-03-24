function solution(numer1, denom1, numer2, denom2) {
    // 제한 사항을 만족
    if (( 0 < numer1 && numer1 < 1000) && ( 0 < denom1 && denom1 < 1000) 
       && ( 0 < numer2 && numer2 < 1000) && ( 0 < denom2 && denom2 < 1000)) 
    {
        // 두 수를 곱한 값을 구해서 분모로 설정
        var denom = denom1 * denom2;
        numer1 = numer1 * denom2;
        numer2 = numer2 * denom1;
        var max = 0;
        // 약분
        for (var i = 1; i < denom +1; i++){
            if(denom % i == 0 && (numer1+numer2)%i == 0){
                max = i;
            }
        }
        var answer = [(numer1+numer2)/max, denom/max];
        return answer;
    } 
}