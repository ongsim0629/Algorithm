function solution(players, callings) {
    const playerIndices = new Map();
    
    // 초기 위치를 해시 맵에 저장
    players.forEach((player, index) => {
        playerIndices.set(player, index);
    });

    for (const horse of callings) {
        const targetIndex = playerIndices.get(horse);
        
        // 현재 위치와 이전 위치 교환
        const previousPlayer = players[targetIndex - 1];
        [players[targetIndex], players[targetIndex - 1]] = [players[targetIndex - 1], players[targetIndex]];

        // 해시 맵 업데이트
        playerIndices.set(horse, targetIndex - 1);
        playerIndices.set(previousPlayer, targetIndex);
    }

    return players;
}