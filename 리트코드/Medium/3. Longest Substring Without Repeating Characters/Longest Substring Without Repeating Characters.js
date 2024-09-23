var lengthOfLongestSubstring = function(s) {
    // substring 담을 문자열
    let substring = '';
    // return할 최대 substring의 길이
    let maximum_length = 0;
    
    for (let i = 0; i < s.length; i++) {
        substring += s[i];
        for (let j = i+1; j < s.length; j++){
            // 만약에 이미 substring에 포함된 알파벳이면 break
            if(substring.includes(s[j])){
                break;
            }
            else{
                substring += s[j];
            }
        }
        // 최대 substring의 길이인지 확인
        if (maximum_length <= substring.length){
            console.log(substring)
            maximum_length = substring.length;
        }
        // substring 초기화
        substring = '';
    }
    return maximum_length
};
