function solution(video_len, pos, op_start, op_end, commands) {
    // 계산의 편의를 위해서 시간을 초 단위로 계산
    const toSeconds = (time) => {
        const [mm, ss] = time.split(':').map(Number);
        return mm * 60 + ss;
    }
    
    const videoLenSec = toSeconds(video_len);
    const opStartSec = toSeconds(op_start);
    const opEndSec = toSeconds(op_end);
    let currentPos = toSeconds(pos);
    
    for (let i = 0; i < commands.length; i++) {
        // 오프닝 스킵
        if (opStartSec <= currentPos && currentPos <= opEndSec) {
            currentPos = opEndSec;
        }
        // 10초 전
        if (commands[i] === "prev") {
            if (currentPos <= 10){
                currentPos = 0;
            }
            else{
                currentPos -= 10;
            }
        } 
        // 10초 후
        else if (commands[i] === "next") {
            currentPos = Math.min(currentPos + 10, videoLenSec);
        }
    }

    if (opStartSec <= currentPos && currentPos <= opEndSec) {
        currentPos = opEndSec;
    }

    let answer_m = Math.floor(currentPos/60);
    if (answer_m < 10){
        answer_m = "0" + answer_m;
    }
    let answer_s = (currentPos % 60);
     if (answer_s < 10){
        answer_s = "0" + answer_s;
    }
    let answer = answer_m + ":" + answer_s;
    return answer;
}