function solution(dot) {
    // dot의 길이가 제한사항을 만족할 때
    if (dot.length == 2){
        // dot의 원소가 제한사항을 만족할 때
        for (var i=0; i< dot.length; i++){
            if(-501 < dot[i] && dot[i] < 501 && dot[i] != 0){
                // x좌표 -> 음수
                if(dot[i] < 0){
                    // y좌표 -> 음수
                    if (dot[i+1] < 0){
                        var answer = 3;
                    }
                    // y좌표 -> 양수
                    else {
                        var answer = 2;
                    }
                }
                // x좌표 -> 양수
                else{
                    // y좌표 -> 음수
                    if (dot[i+1] < 0){
                        var answer = 4;
                    }
                    // y좌표 -> 양수
                    else{
                        var answer = 1;
                    }
                }
            return answer;
            }
        }
    }
    else {
        console.log("wrong input!");
    }
}