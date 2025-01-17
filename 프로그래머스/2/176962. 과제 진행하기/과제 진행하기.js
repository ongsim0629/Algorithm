function solution(plans) {
    let answer = [];
    // 시간 분으로 변환 후 정렬
    const sorted_plans = plans.map(([subject, time, duration]) => {
        const startTime = parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3, 5));
        const durationMinutes = parseInt(duration);
        return [subject, startTime, durationMinutes];
    }).sort((a, b) => a[1] - b[1]);

    // 계산 시작
    let remains = [];
    let time = sorted_plans[0][1]; // 첫 시작 시간

    for (let i = 0; i < sorted_plans.length - 1; i++) {
        const [currentSubject, currentStartTime, currentDuration] = sorted_plans[i];
        const [nextSubject, nextStartTime] = sorted_plans[i + 1];

        // 현재 과제를 끝낼 수 있는 경우
        if (currentStartTime + currentDuration <= nextStartTime) {
            time = currentStartTime + currentDuration;
            answer.push(currentSubject);

            // 남은 과제 처리
            while (remains.length > 0 && time < nextStartTime) {
                const [remainSubject, remainDuration] = remains.pop(); // LIFO 방식
                if (time + remainDuration <= nextStartTime) {
                    time += remainDuration;
                    answer.push(remainSubject);
                } else {
                    remains.push([remainSubject, remainDuration - (nextStartTime - time)]);
                    time = nextStartTime;
                    break;
                }
            }
        } else {
            // 현재 과제를 다 못 끝내고 남은 작업 저장
            remains.push([currentSubject, currentStartTime + currentDuration - nextStartTime]);
        }
    }

    // 마지막 과제 처리
    const [lastSubject] = sorted_plans[sorted_plans.length - 1];
    answer.push(lastSubject);

    // 남은 과제 처리
    while (remains.length > 0) {
        const [remainSubject] = remains.pop();
        answer.push(remainSubject);
    }

    return answer;
}
