const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

// 회의실 리스트 정렬
const rooms = input.slice(1, N + 1).sort();

// 회의실별 예약 현황 배열 초기화 (9시~18시를 0~9로 표현)
const reservations = {};
rooms.forEach(room => {
    reservations[room] = new Array(9).fill(0);
});

// 예약 정보를 시간별로 표시
for (let i = N + 1; i < input.length; i++) {
    const [room, start, end] = input[i].split(' ');
    const startIdx = parseInt(start) - 9;
    const endIdx = parseInt(end) - 9;
    for (let j = startIdx; j < endIdx; j++) {
        reservations[room][j] = 1;
    }
}

// 각 회의실별 가능한 시간 계산 및 출력
rooms.forEach((room, roomIndex) => {
    console.log(`Room ${room}:`);
    
    const timeSlots = reservations[room];
    let availableTimes = [];
    let start = -1;
    
    // 연속된 빈 시간대 찾기
    for (let i = 0; i < timeSlots.length; i++) {
        if (timeSlots[i] === 0 && (i === 0 || timeSlots[i - 1] === 1)) {
            start = i + 9;
        }
        if (timeSlots[i] === 1 && start !== -1) {
            availableTimes.push(
                `${String(start).padStart(2, '0')}-${String(i + 9).padStart(2, '0')}`
            );
            start = -1;
        }
    }
    
    // 마지막 시간대가 비어있는 경우
    if (start !== -1) {
        availableTimes.push(`${String(start).padStart(2, '0')}-18`);
    }
    
    // 결과 출력
    if (availableTimes.length === 0) {
        console.log("Not available");
    } else {
        console.log(`${availableTimes.length} available:`);
        availableTimes.forEach(time => console.log(time));
    }
    
    // 마지막 회의실이 아닌 경우에만 구분선 출력
    if (roomIndex !== rooms.length - 1) {
        console.log("-----");
    }
});
