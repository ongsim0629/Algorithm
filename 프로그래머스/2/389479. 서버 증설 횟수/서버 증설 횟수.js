function solution(players, m, k) {
    let answer = 0;
    let servers = new Array(24).fill(0);
    
    for (let time = 0; time < 24; time++) {
        // 현재 시간에 필요한 서버 개수
        const required = Math.floor(players[time] / m);
        
        // 이전에 할당된 서버 중 아직 유효한 서버 수 계산
        let activeServers = 0;
        for (let i = Math.max(0, time - k + 1); i <= time; i++) {
            activeServers += servers[i];
        }
        
        // 추가로 필요한 서버가 있다면
        if (required > activeServers) {
            const newServers = required - activeServers;
            // 새로 추가되는 서버 수만 기록
            servers[time] = newServers;
            answer += newServers;
        }
    }
    
    return answer;
}