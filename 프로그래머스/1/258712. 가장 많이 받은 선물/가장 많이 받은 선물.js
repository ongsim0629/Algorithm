function solution(friends, gifts) {
    const giftStats = new Map();
    const giftExchanges = new Map();
    
    // 초기화
    for (const friend of friends) {
        giftStats.set(friend, { given: 0, received: 0, nextMonth: 0 });
    }
    
    // 선물 교환 기록 및 통계 집계
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(' ');
        giftExchanges.set(gift, (giftExchanges.get(gift) || 0) + 1);
        giftStats.get(giver).given += 1;
        giftStats.get(receiver).received += 1;
    }
    
    // 다음 달 선물 계산
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (i === j) continue;
            
            const friendA = friends[i];
            const friendB = friends[j];
            const statsA = giftStats.get(friendA);
            const statsB = giftStats.get(friendB);
            
            const giftsAB = giftExchanges.get(`${friendA} ${friendB}`) || 0;
            const giftsBA = giftExchanges.get(`${friendB} ${friendA}`) || 0;
            
            // A가 B에게 더 많이 준 경우
            if (giftsAB > giftsBA) {
                statsA.nextMonth += 1;
            }
            // B가 A에게 더 많이 준 경우
            else if (giftsAB < giftsBA) {
                statsB.nextMonth += 1;
            }
            // 선물을 주고받은 수가 같은 경우
            else {
                const giftIndexA = statsA.given - statsA.received;
                const giftIndexB = statsB.given - statsB.received;
                
                if (giftIndexA > giftIndexB) {
                    statsA.nextMonth += 1;
                }
                else if (giftIndexA < giftIndexB) {
                    statsB.nextMonth += 1;
                }
            }
        }
    }
    
    return Math.max(...[...giftStats.values()].map(stats => stats.nextMonth / 2));
}