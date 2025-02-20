function solution(schedules, timelogs, startday) {
    let answer = 0;

    // 출근 마감 계산을 위한 함수
    const addMinutes = (time, addTime) => {
        let hours = Math.floor(time / 100);
        let mins = time % 100;
        
        mins += addTime;
        if (mins >= 60) {
            hours += Math.floor(mins / 60);
            mins %= 60;
        }
        
        return hours * 100 + mins;
    };

    for (let i = 0; i < schedules.length; i++) {
        // 출근 목표 시간
        const targetTime = schedules[i];
        // 출근 마감 시간
        const limitTime = addMinutes(targetTime, 10);
        let isGift = true;

        for (let j = 0; j < 7; j++) {
            let currentDay = startday + j;
            if (currentDay > 7) currentDay -= 7;
            
            // 주말이면 건너뛰기
            if (currentDay === 6 || currentDay === 7) {
                continue;
            }

            const arrivalTime = timelogs[i][j];  // 실제 출근 시각

            // 출근 시각이 마감 시각보다 늦으면 선물 안 줌
            if (arrivalTime > limitTime) {
                isGift = false;
                break;
            }
        }
        
        // 지각을 한 번도 안 했으면 선물을 준다.
        if (isGift) {
            answer++;
        }
    }

    return answer;
}